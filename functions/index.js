const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fetch = require('node-fetch');

admin.initializeApp();

// Helper to extract client IP behind Firebase Hosting/Cloud Functions
function getClientIp(req) {
  const xff = req.headers['x-forwarded-for'];
  if (xff && typeof xff === 'string') {
    return xff.split(',')[0].trim();
  }
  return req.ip || req.connection?.remoteAddress || null;
}

exports.collectVisit = functions.https.onRequest(async (req, res) => {
  try {
    // Allow only GET/POST
    if (req.method !== 'GET' && req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const ipAddress = getClientIp(req);
    let response = {
      ipAddress: ipAddress || 'Unknown',
    };

    // Optionally enrich with geo/isp from server-side to avoid client blockers
    if (ipAddress) {
      try {
        const r = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        if (r.ok) {
          const d = await r.json();
          response = {
            ...response,
            country: d.country_name || 'Unknown',
            region: d.region || 'Unknown',
            city: d.city || 'Unknown',
            latitude: d.latitude || 'Unknown',
            longitude: d.longitude || 'Unknown',
            isp: d.org || 'Unknown',
            location: `${d.city || 'Unknown'}, ${d.country_name || 'Unknown'}`,
          };
        }
      } catch (_) {}
    }

    res.set('Cache-Control', 'no-store');
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ error: 'Internal error' });
  }
});

