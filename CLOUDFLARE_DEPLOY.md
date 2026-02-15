# Deploy redaa.ca to Cloudflare Pages

This app uses the **OpenNext Cloudflare** adapter so Next.js (including API routes) runs on Cloudflare. The repo includes `wrangler.jsonc` and `open-next.config.ts` so the build runs without prompts.

## In Cloudflare Dashboard (Pages project)

1. Go to **Workers & Pages** → your **redaa-consulting** project → **Settings**.
2. Under **Builds & deployments** → **Build configurations**:

   - **Build command:**  
     `npx opennextjs-cloudflare build`

   - **Deploy command:**  
     `npx opennextjs-cloudflare deploy`

   - **Build output directory:** leave **empty** (OpenNext deploys a Worker, not a static folder).

3. If you see a **Deploy command** set to `npx wrangler deploy`, replace it with the command above.

4. **Environment variables** (same as before):  
   Add `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, and any contact/Resend vars for **Production** (and Preview if you use it).

5. Save and trigger a new deploy (e.g. **Retry deployment** or push a commit).

## Local test before pushing

```bash
npm install
npm run build:cloudflare
npm run preview:cloudflare
```

Then open the URL Wrangler prints to confirm the site works.
