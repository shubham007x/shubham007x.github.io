# GitHub Pages Deployment Guide

## Deployment Steps

### Option 1: Using GitHub Actions (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/shubham007x/shubham007x.github.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: Select "GitHub Actions"
   - The workflow will automatically deploy on push

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **The `out` folder will be created with static files**

3. **Push the `out` folder to the `gh-pages` branch:**
   ```bash
   git subtree push --prefix out origin gh-pages
   ```

   Or manually:
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   cp -r out/* .
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## Important Notes

1. **Base Path:** The portfolio is configured for root deployment (`/`)
2. **Images:** All images should be in `public/` folder
3. **Static Export:** Next.js is configured for static export
4. **Build Output:** Files will be in `out/` folder after build

## After Deployment

Your portfolio will be available at:
**https://shubham007x.github.io**

## Troubleshooting

- If images don't load, check that they're in the `public/` folder
- If routes don't work, ensure `trailingSlash: false` in `next.config.ts`
- Clear browser cache if you see old content

