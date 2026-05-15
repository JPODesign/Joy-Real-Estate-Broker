# Joy Ogaya Realty Website

Static HTML/CSS/JS real estate website prepared for Vercel and GitHub Pages.

## Project Structure

```text
.
+-- index.html
+-- styles.css
+-- script.js
+-- assets/
    +-- images/
        +-- alta-monte-pililla/
            +-- main.png
        +-- acropolis-loyola/
            +-- main.png
    +-- videos/
        +-- alta-monte-pililla/
            +-- main.mp4
```

`index.html` is in the root folder. CSS, JavaScript, image files, and video files use relative paths so the site can run locally and on static hosts like Vercel.

## Local Preview

Option 1:

1. Open the project folder.
2. Double-click `index.html`.

Option 2:

1. Open VS Code.
2. Open the project folder.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

## Deploy to Vercel

1. Push this project to GitHub.
2. Open Vercel.
3. Click **Add New > Project**.
4. Import the GitHub repository.
5. Set **Framework Preset** to **Other**.
6. Leave **Build Command** empty.
7. Leave **Output Directory** empty, or use the project root.
8. Leave **Install Command** empty.
9. Click **Deploy**.
10. Open the generated Vercel URL after deployment finishes.

Vercel should serve this site without a build command because `index.html` is in the root folder.

## GitHub Pages Deployment

1. Open GitHub Desktop.
2. Commit all changes.
3. Push origin.
4. Go to the GitHub repository.
5. Open **Settings > Pages**.
6. Set **Source** to **Deploy from a branch**.
7. Set **Branch** to `master`.
8. Set **Folder** to `/root`.
9. Click **Save**.
10. Wait 2-5 minutes.
11. Open the GitHub Pages link.

## Static Hosting Compatibility

This site is ready for static hosting because:

- `index.html` is in the root folder.
- `styles.css` and `script.js` are linked with relative paths.
- Images are stored under `assets/images/<property-name>/`.
- Videos are stored under `assets/videos/<property-name>/`.
- No local computer paths are required by the website.
