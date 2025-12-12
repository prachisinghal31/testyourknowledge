# Deployment Guide

## Quick Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Or use GitHub Integration**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect Next.js and deploy

## Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

3. **Or use Netlify Dashboard**:
   - Push your code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Import your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

## Environment Variables

No environment variables are required for this project.

## Build Verification

Before deploying, verify the build works locally:
```bash
npm run build
npm start
```

Visit `http://localhost:3000` to test the production build.

