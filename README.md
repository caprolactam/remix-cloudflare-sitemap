# Create sitemap with Remix + Vite + Cloudflare

Clone repo and install packages:

```bash
git clone https://github.com/caprolactam/remix-cloudflare-sitemap.git
cd ./remix-cloudflare-sitemap
npm i
```

Build app for creating sitemap:

```bash
npm run build
```

Run the app with the dev server:

```bash
npm run dev
```

Then, visit <http://localhost:5173/sitemap.xml>.

Of course, You can run the app with Wrangler:

```bash
npm run start
```

Then, visit <http://127.0.0.1:8788/sitemap.xml>

## What is this repo?

Creating a sitemap as static assets.
I used Remix offial cloudflare template and `@nasa-gcn/remix-seo`.
You can check the changes from [commits](https://github.com/caprolactam/remix-cloudflare-sitemap/commits/main/).
