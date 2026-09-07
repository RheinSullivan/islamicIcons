# 🚀 Deployment Guide - Islamic Icons Documentation

## Vercel Deployment Configuration

### Prerequisites
- GitHub repository: `https://github.com/RheinSullivan/islamic-icons_docs`
- Vercel account connected to GitHub

### Settings Required in Vercel Dashboard

#### 1. Git Configuration
**Production Branch**: `main` (NOT `master`)

Go to: **Project Settings** → **Git** → **Production Branch**
- Set to: `main`
- Save changes

#### 2. Build & Development Settings

Go to: **Project Settings** → **Build & Development Settings**

**Framework Preset**: `SvelteKit`

**Build Command**:
```bash
npm run build
```

**Output Directory**: 
```
.svelte-kit
```

**Install Command**:
```bash
npm install
```

**Root Directory**: 
```
./
```

#### 3. Environment Variables
No environment variables required for this project.

### Build Process

The build follows these steps:

1. **Install Dependencies**: `npm install`
2. **Copy Icons**: `node scripts/copy-icons.mjs` (prebuild script)
3. **Build**: `vite build` (generates SvelteKit production build)

### Troubleshooting

#### Error: `Branch master not found`
**Solution**: Update Production Branch to `main` in Vercel Dashboard

#### Error: `vite: command not found`
**Solution**: Ensure `npm install` runs successfully. Check that `vite` is in `devDependencies`.

#### Error: `link:../library not supported`
**Solution**: Already fixed - `atsarul-mujahidin` dependency removed from package.json. Icons are served from static assets.

#### Error: `jsdom version incompatible`
**Solution**: Already fixed - jsdom downgraded to v25.0.0

### Manual Deployment

To deploy manually from local machine:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
cd web-docs
vercel --prod
```

### Automatic Deployment

Automatic deployments trigger on:
- Push to `main` branch
- Pull requests (preview deployments)

### Build Cache

Vercel automatically caches:
- `node_modules/`
- `.svelte-kit/` build artifacts

To clear cache: **Project Settings** → **Deployments** → **Redeploy** with "Clear Cache" option

### Production URL

- **Primary**: https://atsarulmujahidin.rheinsullivan.web.id
- **Vercel**: https://islamic-icons-docs.vercel.app

### Support

For deployment issues:
- Check Vercel build logs
- Review this guide
- Open issue: https://github.com/RheinSullivan/islamic-icons_docs/issues
