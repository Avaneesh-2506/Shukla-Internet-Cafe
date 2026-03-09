# Shukla Internet Cafe Website

Static, production-ready website for **Shukla Internet Cafe**, focused on common Indian government and online services with built‑in WhatsApp contact flows.

## Tech Stack

- **HTML5 + CSS3 + Vanilla JavaScript**
- No build step required – can be hosted on any static hosting provider.

## Project Structure

- `index.html` – main page with header, hero, services, location and footer.
- `styles.css` – layout, responsive design and light blue / white theme.
- `script.js` – navigation toggle, smooth scrolling and dynamic year in footer.
- `package.json` – minimal metadata and optional dev server script.

## Running Locally

You can open `index.html` directly in a browser, or use a small static server:

```bash
cd "d:\Shop website"
npm install serve --save-dev
npm run start
```

Then open the URL shown in the terminal (usually `http://localhost:3000`).

## WhatsApp Integration

The site uses WhatsApp deep links like:

```text
https://wa.me/919999999999?text=Hi%20Shukla%20Internet%20Cafe%2C%20I%20need%20help%20with%20Fresh%20PAN%20Application.
```

### Important: Replace With Your Real Number

- Search in all files for `919999999999` and `+91-99999-99999`.
- Replace them with your actual WhatsApp/mobile number in full international format:
  - Example: `+91-98765-43210` → `https://wa.me/919876543210`

## Updating Location & Contact Details

In `index.html`, update the following:

- **Address block** under **Location & Timings** with your exact shop address and landmark.
- **Contact block** with:
  - Your real mobile/WhatsApp number.
  - Your email ID.
- Optionally replace the **Google Maps** link with a direct link to your shop’s map pin.

### Map preview (embed)

To show a **real map preview** in the Location section:

1. Open your shop location in **Google Maps** (e.g. using your share link).
2. Click **Share** → open the **Embed a map** tab.
3. Copy the **iframe** code.
4. In `index.html`, find the Location section and replace the `src="..."` of the `<iframe class="map-embed">` with the `src` from the copied iframe (the long `https://www.google.com/maps/embed?pb=...` URL).

The "Open full location in Google Maps" link continues to use your share link.

## Adding Your Logo

In the header, the current logo area is:

- Brand mark with the letter `S`.
- Text `Shukla Internet Cafe`.

You can:

- Replace the `div.brand-mark` with an `<img>` tag for your logo, or
- Place your logo image next to the existing mark.

## Deployment

You can deploy this site to:

- GitHub Pages
- Netlify
- Vercel
- Any shared hosting that can serve static HTML files

Just upload all files (`index.html`, `styles.css`, `script.js`, and optional `favicon.ico`) to your hosting root or public folder.

