# Trello Card Estimates Power-Up

A Trello Power-Up that allows you to add numeric estimates to cards and view the total sum of estimates for each column/list.

## Features

- ✅ Add numeric estimates to any card
- ✅ View estimates as badges on cards
- ✅ Calculate and display total estimates for each list/column
- ✅ Simple, intuitive interface
- ✅ Support for decimal values

## How It Works

### Setting Estimates on Cards

1. Click on any card to open it
2. Find the "Estimate" badge in the card details
3. Click on it to set or edit the estimate
4. Enter a numeric value (e.g., 5, 8, 13, 2.5)
5. Click "Save" or press Enter

### Viewing Column Totals

1. On any list, click the "..." menu button
2. Select "Show Estimate Total"
3. A popup will display the sum of all estimates in that column

### What You'll See

- **Card Badge**: Each card with an estimate shows a blue badge with the number
- **List Total**: The sum of all estimates in a column

## Installation

### Option 1: Host on GitHub Pages (Recommended)

1. Fork or create a new repository on GitHub
2. Upload all files from this Power-Up:
   - `index.html`
   - `client.js`
   - `estimate-popup.html`
   - `list-total.html`
   - `settings.html`
   - `manifest.json`

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Save

4. Your Power-Up will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

5. Add to Trello:
   - Go to https://trello.com/power-ups/admin
   - Click "New Power-Up"
   - Fill in the details:
     - Name: "Card Estimates"
     - Iframe connector URL: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/index.html`
   - Save and enable the Power-Up on your board

### Option 2: Host Locally (Development)

1. Install a simple HTTP server:
   ```bash
   npm install -g http-server
   ```

2. Navigate to the Power-Up directory and start the server:
   ```bash
   cd /path/to/powerup
   http-server -p 8080 --cors
   ```

3. Use a tunneling service like ngrok to expose your local server:
   ```bash
   ngrok http 8080
   ```

4. Add to Trello using the ngrok URL as your iframe connector URL

### Option 3: Host on Any Web Server

Upload all files to any web server (Netlify, Vercel, your own server, etc.) and use the URL in the Trello Power-Up settings.

## File Structure

```
card-estimates-powerup/
├── index.html           # Main entry point
├── client.js            # Core Power-Up logic
├── estimate-popup.html  # Popup for setting estimates
├── list-total.html      # Popup for viewing list totals
├── settings.html        # Settings/info page
├── manifest.json        # Power-Up manifest
└── README.md           # This file
```

## Technical Details

### Data Storage

The Power-Up uses Trello's built-in storage API to save estimates:
- Estimates are stored at the card level
- Data is stored as shared data (visible to all board members)
- Storage key: `estimate`

### Capabilities Used

- `card-badges` - Display estimate on cards
- `card-detail-badges` - Edit estimate in card details
- `list-actions` - Show total in list menu
- `show-settings` - Settings page

## Customization

### Change the Icon

Edit `client.js` and modify the `ICON_URL` variable:
```javascript
var ICON_URL = 'https://your-icon-url.png';
```

### Modify Calculation

To change how totals are calculated (e.g., average instead of sum), edit the `getListTotal` function in `client.js`.

### Styling

Modify the `<style>` sections in the HTML files to customize colors and appearance.

## Troubleshooting

**Power-Up doesn't appear:**
- Check that your files are hosted and accessible via HTTPS
- Verify the iframe connector URL in Trello Power-Up settings
- Make sure CORS is enabled on your server

**Estimates not saving:**
- Check browser console for errors
- Verify you have edit permissions on the board

**Total not calculating:**
- Ensure all estimates are numeric values
- Check browser console for errors

## Browser Support

Works in all modern browsers that support:
- ES5 JavaScript
- Promises
- Fetch API

## License

Free to use and modify for your own purposes.

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify all files are hosted correctly
3. Test with a simple board first

## Future Enhancements

Potential features to add:
- Different estimate units (hours, story points, etc.)
- Board-level summary
- Export estimates to CSV
- Custom calculation formulas
- Color coding based on estimate ranges
