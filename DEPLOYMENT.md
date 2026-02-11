# GitHub Pages Deployment Guide

This guide will help you deploy your law firm website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Deployment Steps

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `lawfirm-website` or `yourfirmname.github.io`
3. Keep it public (required for free GitHub Pages)
4. Don't initialize with README (we'll push existing code)

### 2. Configure for GitHub Pages

If you're deploying to a repository (not username.github.io), update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/', // Add this line with your repository name
  plugins: [react(), tailwindcss()],
  // ... rest of config
})
```

**Note:** If you're using `username.github.io` as your repo name, you can skip this step.

### 3. Build Your Website

Run the build command:

```bash
npm run build
```

This creates a `dist` folder with your static website files.

### 4. Push to GitHub

Initialize git and push your code:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 5. Set Up GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. GitHub will suggest a workflow - you can use the static HTML workflow or create a custom one

### 6. Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
  
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 7. Deploy

After pushing the workflow file, GitHub Actions will automatically:
1. Build your website
2. Deploy it to GitHub Pages

You can view the deployment progress in the **Actions** tab of your repository.

### 8. Access Your Website

Your website will be available at:
- `https://yourusername.github.io/your-repo-name/` (for project repos)
- `https://yourusername.github.io/` (if repo is named username.github.io)

## Updating Your Website

To update your website:

1. Make changes to your code
2. Commit and push to the main branch:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. GitHub Actions will automatically rebuild and redeploy

## How It Works

- **All content is static**: Your blog posts and data are stored in TypeScript files, so they're compiled into the build
- **Client-side routing**: React Router handles navigation without page reloads
- **404 handling**: The `404.html` file redirects to `index.html` for proper routing
- **No backend needed**: Everything runs in the browser

## Troubleshooting

### Blank page or routing issues
- Check that `base` in `vite.config.ts` matches your repo name
- Verify the 404.html file is in the `public` folder
- Check browser console for errors

### Build fails
- Make sure all dependencies are in package.json
- Try `npm install` and `npm run build` locally first

### Images not loading
- Ensure images from Unsplash are accessible
- Check that image URLs are correct in the data files

## Custom Domain (Optional)

To use a custom domain like `www.yourfirm.com`:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings

See [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for details.

## Notes

- The free tier of GitHub Pages is perfect for this website
- All content loads instantly since it's compiled into the JavaScript bundle
- You can add new blog posts by editing `/src/app/data/blogPosts.ts`
- The website is fully responsive and works on all devices
