import { useEffect } from 'react';
import { saveVisitor } from '../firebase/visitorService';

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      // Get basic visitor information
      const visitorData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenResolution: typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'N/A',
        viewport: typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'N/A',
        referrer: typeof document !== 'undefined' ? document.referrer || 'Direct' : 'N/A',
        url: typeof window !== 'undefined' ? window.location.href : 'N/A',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        // Generate a simple fingerprint based on browser characteristics
        fingerprint: generateFingerprint(),
      };

      // Get additional device information
      const deviceInfo = getDeviceInfo();
      const networkInfo = await getNetworkInfo();

      // Merge all information
      const enhancedVisitorData = {
        ...visitorData,
        ...deviceInfo,
        ...networkInfo
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

    // Generate a simple fingerprint based on browser characteristics
    const generateFingerprint = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Fingerprint', 2, 2);

      const fingerprint = [
        navigator.userAgent,
        navigator.language,
        window.screen.width + 'x' + window.screen.height,
        new Date().getTimezoneOffset(),
        ctx.getImageData(0, 0, 1, 1).data[0]
      ].join('|');

      return btoa(fingerprint).slice(0, 16); // Simple hash
    };

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