# Null Labs website

Hope y'all enjoy this gift, keep up the hard work.

## Run locally

This is a static HTML website, so no build step is required.

### Recommended: VS Code Live Server

1. Clone the repository and open the cloned folder in VS Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Open `index.html`, then click **Go Live** in the VS Code status bar or right-click the file and choose **Open with Live Server**.

Live Server opens the website in your browser and automatically refreshes it when files change.

### Shared navigation and contact email

Every page loads `script.js`, which renders the shared navigation and footer into their HTML placeholders. To change the Request a Demo email everywhere, update `siteConfig.demoEmail` at the top of `script.js`.

### Alternative: Python

If you do not use VS Code or Live Server, run this command from the root of the cloned repository:

```bash
python3 -m http.server 4174 --bind 0.0.0.0
```

Open [http://localhost:4174](http://localhost:4174) in your browser. Python serves the files but does not automatically refresh the page after edits.

Press `Ctrl+C` in the terminal to stop the server.

## Deploy to Vercel

This repository is ready to deploy as a static site—there is no `npm install` or build command.

1. Import the Git repository into Vercel.
2. Select **Other** as the Framework Preset.
3. Leave the Build Command blank.
4. Leave the Output Directory at its default (`.` because this repository has no `public` directory).
5. Deploy.

The included `vercel.json` enables extensionless page URLs and consistently removes trailing slashes. Images, videos, and fonts under `assets/` must remain committed because Vercel receives the site from the Git repository.
