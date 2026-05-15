# Portfolio Visitor Tracking System

This system allows you to track visitors to your portfolio website and view analytics about who visits your site.

## Features

- **Automatic Visitor Tracking**: Tracks all visitors to your portfolio
- **Device Detection**: Identifies desktop, mobile, and tablet users
- **Visit Analytics**: Shows total visitors, visit counts, and device types
- **Search & Filter**: Search through visitor data and sort by different criteria
- **Data Export**: Export visitor data as JSON file
- **Password Protection**: Secure admin dashboard with password authentication

## How It Works

1. **Visitor Tracking**: The `VisitorTracker` component automatically runs on every page and captures:

   - Browser information (user agent, language, platform)
   - Screen resolution and viewport size
   - Referrer (where visitors came from)
   - Timezone and location data
   - Visit timestamps

2. **Data Storage**: All visitor data is stored locally in the browser's localStorage

3. **Admin Dashboard**: Access analytics at `/admin/visitors` with password protection

## How to Access Your Analytics

1. **Navigate to the admin dashboard**: Go to `your-portfolio-url/#/admin/visitors`
2. **Enter the password**: The default password is `yassa2024`
3. **View your analytics**: See visitor statistics, search through data, and export results

## Customization

### Changing the Admin Password

Edit the `ADMIN_PASSWORD` constant in `src/components/AdminAuth.jsx`:

```javascript
const ADMIN_PASSWORD = "your-new-password";
```

### What Data is Tracked

For each visitor, the system tracks:

- **Device Type**: Desktop, mobile, or tablet
- **Screen Resolution**: e.g., "1920x1080"
- **Browser Info**: User agent string
- **Language**: Browser language setting
- **Timezone**: Visitor's timezone
- **Referrer**: Where they came from (Google, LinkedIn, direct, etc.)
- **Visit Count**: How many times they've visited
- **First/Last Visit**: Timestamps of their visits

## Privacy Considerations

- **Local Storage Only**: Data is stored only in your browser's localStorage
- **No External Services**: No data is sent to external tracking services
- **Browser Fingerprinting**: Uses simple browser fingerprinting to identify unique visitors
- **Session-Based Auth**: Admin authentication is cleared when browser is closed

## Security Notes

- The admin password is stored in plain text in the code (for simplicity)
- For production use, consider implementing a more secure authentication system
- The dashboard URL `/admin/visitors` is publicly accessible, but protected by password

## Data Management

- **Export Data**: Use the "Export Data" button to download visitor data as JSON
- **Clear Data**: Use the "Clear All" button to delete all visitor data
- **Data Persistence**: Data persists until manually cleared or browser data is cleared

## Technical Details

- **Fingerprinting**: Uses canvas fingerprinting and browser characteristics to identify unique visitors
- **Route Tracking**: Tracks page changes within your portfolio
- **Responsive Design**: Dashboard works on all device types
- **Real-time Updates**: Data updates automatically as new visitors arrive

## Troubleshooting

- **No visitors showing**: Make sure you've visited your portfolio from different browsers/devices
- **Can't access dashboard**: Check that you're using the correct password
- **Data not persisting**: Ensure localStorage is enabled in your browser

## Future Enhancements

Consider adding:

- IP geolocation for visitor location
- More detailed analytics (time spent, pages visited)
- Email notifications for new visitors
- Integration with external analytics services
- More sophisticated visitor identification methods
