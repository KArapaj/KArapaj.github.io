# Portfolio Website - Deployment Instructions

This document contains instructions for deploying the portfolio website to GitHub Pages.

## Prerequisites

- GitHub repository: `KArapaj/KArapaj.github.io`
- Node.js 20+ installed locally (for development)
- GitHub Pages enabled in repository settings

## Automated Deployment (Recommended)

The repository is configured with GitHub Actions for automatic deployment.

### Setup Steps:

1. **Enable GitHub Pages in Repository Settings**
   - Go to repository Settings → Pages
   - Under "Build and deployment":
     - Source: GitHub Actions
   - Save the settings

2. **Push to Main Branch**
   ```bash
   git push origin main
   ```
   
3. **Monitor Deployment**
   - Go to Actions tab in the repository
   - Watch the "Deploy to GitHub Pages" workflow
   - Once completed, the site will be live at `https://karapaj.github.io`

### Workflow Details

The workflow (`.github/workflows/deploy.yml`) automatically:
- Installs dependencies
- Builds the production bundle
- Deploys to GitHub Pages

It triggers on:
- Push to `main` branch
- Manual workflow dispatch

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Install gh-pages package** (already included in package.json)

2. **Run deployment command**
   ```bash
   npm run deploy
   ```
   
   This will:
   - Build the production bundle
   - Deploy to `gh-pages` branch
   - Make the site available at `https://karapaj.github.io`

## Local Development

To run the portfolio locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in browser
```

## Build for Production

To create a production build locally:

```bash
npm run build

# Preview the production build
npm run preview
```

## Customization

Before deploying, customize the portfolio content:

1. **Personal Information** (`src/components/Hero.jsx`)
   - Update name (currently: Khalil Arapaj)
   - Update email links
   - Update LinkedIn URL
   - Update GitHub URL

2. **About Section** (`src/components/About.jsx`)
   - Modify bio text
   - Update dissertation details
   - Adjust skills list

3. **Projects** (`src/components/Projects.jsx`)
   - Add real project details
   - Update GitHub repository links
   - Replace placeholder projects
   - Add real demo videos/screenshots

4. **Experience** (`src/components/Experience.jsx`)
   - Update work experience
   - Modify dates and descriptions
   - Add real achievements

5. **Contact** (`src/components/Contact.jsx`)
   - Update email address
   - Configure form submission (currently client-side only)
   - Add backend service if needed

## Adding a Backend for Contact Form

The current contact form is client-side only. To make it functional:

### Option 1: FormSpree
```javascript
// In Contact.jsx, update the form action
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at emailjs.com
2. Install: `npm install @emailjs/browser`
3. Configure in Contact.jsx

### Option 3: Netlify Forms
If deploying to Netlify instead, add:
```html
<form name="contact" method="POST" data-netlify="true">
```

## SEO Optimization

The site includes:
- Meta descriptions
- Open Graph tags for social media
- Twitter cards
- Semantic HTML structure

Update in `index.html`:
- Meta description
- Open Graph image URL
- Title tags

## Performance

Current build stats:
- HTML: 2.25 KB (gzipped: 0.75 KB)
- CSS: 17.63 KB (gzipped: 4.01 KB)
- JS: 352.60 KB (gzipped: 112.83 KB)

Total gzipped size: ~113 KB

## Troubleshooting

### Build Fails
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Fails
- Check GitHub Actions logs
- Verify Pages settings in repository
- Ensure workflow has proper permissions

### Styles Not Loading
- Check browser console for errors
- Verify base URL in `vite.config.js`
- Clear browser cache

## Repository Settings Required

Ensure these permissions are set for GitHub Actions:
- Settings → Actions → General
- Workflow permissions: Read and write permissions
- Allow GitHub Actions to create and approve pull requests: Enabled

## Support

For issues or questions:
- Check GitHub Actions logs
- Review Vite documentation: https://vite.dev
- Review Tailwind CSS docs: https://tailwindcss.com
- Check React documentation: https://react.dev

## License

This portfolio template is open source and available under the MIT License.
