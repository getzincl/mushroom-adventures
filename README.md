# 🍄 My Mushroom Adventures

A static personal mushroom-adventure journal designed for GitHub Pages.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `mushroom-adventures`.
2. Upload all files and folders from this project.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will provide a URL similar to:
   `https://YOUR-USERNAME.github.io/mushroom-adventures/`

## Add your own adventures

Edit `js/app.js`.

Add objects to the `adventures` array. Keep `publicMap` at a general location rather than your exact spot.

## Add private locations

The private section in this starter is intentionally lightweight. Before publishing:

1. Change `PRIVATE_PASSWORD` in `js/app.js`.
2. Replace the example private locations.
3. Understand that this is **not strong security**. Because GitHub Pages is static, the data in `app.js` can technically be downloaded by someone who knows how to inspect the site.

For ordinary visitors and casual scraping, it provides a basic password gate. For genuinely secret locations, move the private coordinates to a server-side/authenticated service later.

## Privacy / anti-indexing

This project includes:
- `robots.txt` with `Disallow: /`
- `noindex`, `nofollow`, `noarchive`, and `noimageindex` meta directives
- No sitemap
- No analytics by default

These measures discourage legitimate search engines and crawlers from indexing the site, but they are not a guarantee against a crawler that intentionally ignores robots directives.

## Maps

The map uses Leaflet with OpenStreetMap tiles. Review the OpenStreetMap tile usage policy before significant/high-volume use.
