import { useEffect } from 'react';
import { saveVisitor } from '../firebase/visitorService';

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      const visitorId = getPersistentVisitorId();
      const uaHints = await getUserAgentHints();
      const batteryInfo = await getBatteryInfo();
      const storageInfo = await getStorageInfo();
      const permissions = await getPermissionsStatus();
      const mediaDevices = await getMediaDevicesInfo();

      // Get basic and enhanced visitor information
      const visitorData = {
        visitorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: navigator.languages || [],
        platform: navigator.platform,
        vendor: navigator.vendor,
        screenResolution: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'N/A',
        viewport: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'N/A',
        devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
        orientation: (window.screen.orientation && (window.screen.orientation.type || window.screen.orientation.angle)) || null,
        colorDepth: window.screen.colorDepth,
        pixelDepth: window.screen.pixelDepth,
        prefersDarkMode: typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false,
        prefersReducedMotion: typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,
        maxTouchPoints: navigator.maxTouchPoints || 0,
        referrer: typeof document !== 'undefined' ? document.referrer || 'Direct' : 'N/A',
        url: typeof window !== 'undefined' ? window.location.href : 'N/A',
        path: typeof window !== 'undefined' ? window.location.pathname + window.location.search + window.location.hash : 'N/A',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffsetMinutes: new Date().getTimezoneOffset(),
        isOnline: navigator.onLine,
        hardwareConcurrency: navigator.hardwareConcurrency || null,
        deviceMemory: navigator.deviceMemory || null,
        // UA-CH fields
        ...uaHints,
        // Battery & storage & permissions & media devices
        battery: batteryInfo,
        storage: storageInfo,
        permissions,
        mediaDevices,
        // Robust fingerprint
        fingerprint: await generateRobustFingerprint({ uaHints }),
      };

      // Get additional device information
      const deviceInfo = getDeviceInfo();
      const networkInfo = await getNetworkInfo();
      const serverIpInfo = await getServerIpInfo();

      // Merge all information
      const enhancedVisitorData = {
        ...visitorData,
        ...deviceInfo,
        ...networkInfo,
        // Server-derived IP (more reliable)
        serverIp: serverIpInfo.ipAddress || undefined,
        serverLocation: serverIpInfo.location || undefined,
        serverCountry: serverIpInfo.country || undefined,
        serverRegion: serverIpInfo.region || undefined,
        serverCity: serverIpInfo.city || undefined,
        serverLatitude: serverIpInfo.latitude || undefined,
        serverLongitude: serverIpInfo.longitude || undefined,
        serverIsp: serverIpInfo.isp || undefined
      };

      // Save visitor data to Firebase
      const result = await saveVisitor(enhancedVisitorData);
      if (!result.success) {
        console.error('Failed to save visitor data:', result.error);
      }
    };

    // Get detailed device information
    const getDeviceInfo = () => {
      const deviceInfo = {
        // Device type detection
        deviceType: getDeviceType(navigator.userAgent),

        // Browser information
        browser: getBrowserInfo(),
        browserVersion: getBrowserVersion(),

        // Operating system
        os: getOperatingSystem(),
        osVersion: getOSVersion(),

        // Hardware information
        cpuCores: navigator.hardwareConcurrency || 'Unknown',
        memory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Unknown',

        // Connection information
        connection: navigator.connection ? {
          effectiveType: navigator.connection.effectiveType || 'Unknown',
          downlink: navigator.connection.downlink || 'Unknown',
          rtt: navigator.connection.rtt || 'Unknown'
        } : null,

        // Device capabilities
        touchSupport: 'ontouchstart' in window,
        webGLSupport: !!window.WebGLRenderingContext,
        serviceWorkerSupport: 'serviceWorker' in navigator,

        // Screen information
        colorDepth: window.screen.colorDepth,
        pixelDepth: window.screen.pixelDepth,
        devicePixelRatio: window.devicePixelRatio || 1,

        // Additional device identifiers
        vendor: navigator.vendor,
        cookieEnabled: navigator.cookieEnabled,
        doNotTrack: navigator.doNotTrack,
        onLine: navigator.onLine
      };

      return deviceInfo;
    };

    // Get network and location information
    const getNetworkInfo = async () => {
      const networkInfo = {
        ipAddress: 'Unknown',
        location: 'Unknown',
        isp: 'Unknown'
      };

      try {
        // Try to get IP address and location using a free API
        const response = await fetch('https://api.ipify.org?format=json');
        if (response.ok) {
          const data = await response.json();
          networkInfo.ipAddress = data.ip;

          // Get location data from IP
          const locationResponse = await fetch(`https://ipapi.co/${data.ip}/json/`);
          if (locationResponse.ok) {
            const locationData = await locationResponse.json();
            networkInfo.location = `${locationData.city || 'Unknown'}, ${locationData.country_name || 'Unknown'}`;
            networkInfo.isp = locationData.org || 'Unknown';
            networkInfo.country = locationData.country_name || 'Unknown';
            networkInfo.region = locationData.region || 'Unknown';
            networkInfo.city = locationData.city || 'Unknown';
            networkInfo.latitude = locationData.latitude || 'Unknown';
            networkInfo.longitude = locationData.longitude || 'Unknown';
          }
        }
      } catch (error) {
        console.log('Could not fetch network information:', error);
      }

      return networkInfo;
    };

    // Get IP from server (Cloud Functions behind Firebase Hosting)
    const getServerIpInfo = async () => {
      try {
        const r = await fetch('/api/collect', {
          method: 'GET',
          cache: 'no-store',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!r.ok) {
          console.warn('Server IP collection failed:', r.status, r.statusText);
          return {};
        }
        const data = await r.json();
        console.log('Server IP data:', data);
        return data;
      } catch (error) {
        console.warn('Server IP collection error:', error);
        return {};
      }
    };

    // Helper functions
    const getPersistentVisitorId = () => {
      try {
        const key = 'portfolioVisitorId';
        const existing = localStorage.getItem(key);
        if (existing) return existing;
        const newId = (window.crypto && window.crypto.randomUUID) ? window.crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        localStorage.setItem(key, newId);
        return newId;
      } catch (_) {
        return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      }
    };

    const getUserAgentHints = async () => {
      try {
        const ua = navigator.userAgentData;
        if (!ua || !ua.getHighEntropyValues) {
          return {};
        }
        const high = await ua.getHighEntropyValues([
          'architecture',
          'bitness',
          'model',
          'platform',
          'platformVersion',
          'fullVersionList',
          'wow64'
        ]);
        return {
          uaMobile: ua.mobile || null,
          uaBrands: ua.brands || null,
          uaArchitecture: high.architecture || null,
          uaBitness: high.bitness || null,
          uaModel: high.model || null,
          uaPlatform: high.platform || null,
          uaPlatformVersion: high.platformVersion || null,
          uaFullVersionList: high.fullVersionList || null,
          uaWow64: high.wow64 || null
        };
      } catch (_) {
        return {};
      }
    };

    const getBatteryInfo = async () => {
      try {
        if (navigator.getBattery) {
          const b = await navigator.getBattery();
          return {
            charging: b.charging,
            level: b.level,
            chargingTime: b.chargingTime,
            dischargingTime: b.dischargingTime,
          };
        }
      } catch (_) { }
      return null;
    };

    const getStorageInfo = async () => {
      try {
        if (navigator.storage && navigator.storage.estimate) {
          const { quota, usage } = await navigator.storage.estimate();
          return { quota, usage };
        }
      } catch (_) { }
      return null;
    };

    const getPermissionsStatus = async () => {
      const names = ['geolocation', 'notifications', 'camera', 'microphone'];
      const results = {};
      try {
        if (!navigator.permissions || !navigator.permissions.query) return results;
        await Promise.all(names.map(async (name) => {
          try {
            const status = await navigator.permissions.query({ name });
            results[name] = status.state;
          } catch (_) { }
        }));
      } catch (_) { }
      return results;
    };

    const getMediaDevicesInfo = async () => {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return null;
        const list = await navigator.mediaDevices.enumerateDevices();
        const counts = { audioinput: 0, audiooutput: 0, videoinput: 0 };
        list.forEach(d => { if (counts[d.kind] !== undefined) counts[d.kind]++; });
        return counts;
      } catch (_) {
        return null;
      }
    };

    const generateRobustFingerprint = async (extras = {}) => {
      try {
        const parts = [
          navigator.userAgent,
          navigator.language,
          JSON.stringify(navigator.languages || []),
          navigator.platform,
          navigator.vendor,
          (window.screen && `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`) || '',
          String(window.devicePixelRatio || 1),
          String(new Date().getTimezoneOffset()),
          String(navigator.hardwareConcurrency || ''),
          String(navigator.deviceMemory || ''),
          JSON.stringify(extras.uaHints || {})
        ].join('||');
        if (window.crypto && window.crypto.subtle) {
          const data = new TextEncoder().encode(parts);
          const digest = await window.crypto.subtle.digest('SHA-256', data);
          const hashArray = Array.from(new Uint8Array(digest));
          const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
          return hashHex.slice(0, 32);
        }
        return btoa(parts).slice(0, 32);
      } catch (_) {
        return btoa(`${navigator.userAgent}|${navigator.language}`).slice(0, 16);
      }
    };

    // Helper functions for device detection
    const getDeviceType = (userAgent) => {
      if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
        return /iPad/.test(userAgent) ? 'tablet' : 'mobile';
      }
      return 'desktop';
    };

    const getBrowserInfo = () => {
      const userAgent = navigator.userAgent;
      if (userAgent.includes('Chrome')) return 'Chrome';
      if (userAgent.includes('Firefox')) return 'Firefox';
      if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
      if (userAgent.includes('Edge')) return 'Edge';
      if (userAgent.includes('Opera')) return 'Opera';
      return 'Unknown';
    };

    const getBrowserVersion = () => {
      const userAgent = navigator.userAgent;
      const browser = getBrowserInfo();
      const versionMatch = userAgent.match(new RegExp(`${browser}\\/(\\d+)`));
      return versionMatch ? versionMatch[1] : 'Unknown';
    };

    const getOperatingSystem = () => {
      const userAgent = navigator.userAgent || '';
      const platform = navigator.platform || '';

      // iOS detection (covers iPhone, iPad, iPod and iPadOS masquerading as macOS)
      const isiOSUA = /iPhone|iPad|iPod/i.test(userAgent);
      const isiPadOS = /Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1;
      if (isiOSUA || isiPadOS) return 'iOS';

      if (/Android/i.test(userAgent)) return 'Android';
      if (/Win/i.test(userAgent) || /Windows/i.test(platform)) return 'Windows';
      if (/Mac/i.test(platform) || (/Mac OS X/i.test(userAgent) && !isiPadOS)) return 'macOS';
      if (/Linux/i.test(platform) && !/Android/i.test(userAgent)) return 'Linux';
      return 'Unknown';
    };

    const getOSVersion = () => {
      const ua = navigator.userAgent || '';
      const os = getOperatingSystem();
      try {
        switch (os) {
          case 'Windows': {
            const m = ua.match(/Windows NT ([0-9_.]+)/i);
            return m ? m[1].replace('_', '.') : 'Unknown';
          }
          case 'macOS': {
            const m = ua.match(/Mac OS X ([0-9_]+)/i);
            return m ? m[1].replace(/_/g, '.') : 'Unknown';
          }
          case 'Android': {
            const m = ua.match(/Android ([0-9.]+)/i);
            return m ? m[1] : 'Unknown';
          }
          case 'iOS': {
            // iOS on Safari reports like: OS 16_5 like Mac OS X
            const m = ua.match(/OS ([0-9_]+) like Mac OS X/i);
            return m ? m[1].replace(/_/g, '.') : 'Unknown';
          }
          case 'Linux':
          default:
            return 'Unknown';
        }
      } catch (_) {
        return 'Unknown';
      }
    };

    // (removed legacy simple fingerprint helper)

    // Track visitor on component mount
    trackVisitor();

    // Track page changes
    const handleRouteChange = () => {
      trackVisitor();
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default VisitorTracker; 