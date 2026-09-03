# Athar (أثر) - NPM Publish Guide

> **أثر** means *trace, impact, legacy* — something you leave behind.

This guide explains how to build and publish the Athar library to npm.

## Publishing to npm

### Prerequisites

1. **npm account**: Create at [npmjs.com](https://www.npmjs.com/signup)
2. **npm login**: `npm login` or `npm adduser`
3. **Package name available**: Check with `npm search athar`

### Step 1: Prepare Package

```bash
# Navigate to library directory
cd library

# Install dependencies if needed
bun install

# Build the library (if build script exists)
bun run build
```

### Step 2: Verify package.json

Ensure `library/package.json` has these fields:

```json
{
  "name": "athar",
  "version": "0.2.0",
  "description": "Athar (أثر) - Islamic icon library. Create something that leaves a lasting impact.",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./react": {
      "import": "./dist/react/index.js",
      "types": "./dist/react/index.d.ts"
    },
    "./vue": {
      "import": "./dist/vue/index.js",
      "types": "./dist/vue/index.d.ts"
    },
    "./svelte": {
      "import": "./dist/svelte/index.js",
      "types": "./dist/svelte/index.d.ts"
    },
    "./angular": {
      "import": "./dist/angular/index.js",
      "types": "./dist/angular/index.d.ts"
    },
    "./astro": {
      "import": "./dist/astro/index.js",
      "types": "./dist/astro/index.d.ts"
    },
    "./assets/*": "./assets/*"
  },
  "files": [
    "dist",
    "assets",
    "README.md",
    "LICENSE"
  ],
  "keywords": [
    "athar",
    "أثر",
    "islamic",
    "icons",
    "svg",
    "webp",
    "react",
    "vue",
    "svelte",
    "angular",
    "astro",
    "palestine",
    "quran",
    "mosque",
    "ramadan",
    "legacy",
    "impact"
  ],
  "author": "Athar Icons Community",
  "license": "MIT",
  "homepage": "https://athar.vyagra.dev",
  "repository": {
    "type": "git",
    "url": "https://github.com/RheinSullivan/athar.git"
  },
  "bugs": {
    "url": "https://github.com/RheinSullivan/athar/issues"
  }
}
```

### Step 3: Test Package Locally

```bash
# Create a tarball to inspect contents
npm pack

# This creates islamic-icons-1.0.0.tgz
# Extract and verify:
tar -xzf islamic-icons-1.0.0.tgz
ls package/

# Test installation locally
npm install ./islamic-icons-1.0.0.tgz
```

### Step 4: Publish to npm

```bash
# Dry run to see what would be published
npm publish --dry-run

# Publish for real
npm publish

# For scoped package (if using @scope/islamic-icons)
npm publish --access public
```

### Step 5: Verify Publication

```bash
# Check on npm
npm view athar

# Install and test
mkdir test-install
cd test-install
npm init -y
npm install athar

# Test import
node -e "console.log(require('athar'))"
```

## Version Bumping

```bash
cd library

# Patch (1.0.0 → 1.0.1)
npm version patch

# Minor (1.0.0 → 1.1.0)
npm version minor

# Major (1.0.0 → 2.0.0)
npm version major

# This automatically:
# 1. Updates package.json version
# 2. Creates a git commit
# 3. Creates a git tag
```

### Publish New Version

```bash
# Build if needed
bun run build

# Publish
npm publish

# Push tags to GitHub
git push --follow-tags
```

## Pre-publish Checklist

- [ ] README.md updated with current features
- [ ] package.json version bumped
- [ ] CHANGELOG.md updated
- [ ] All tests passing
- [ ] Build successful (bun run build)
- [ ] Assets folder included
- [ ] Types generated (.d.ts files)
- [ ] LICENSE file present
- [ ] .npmignore configured (or use files in package.json)

## Recommended Package Scripts

Add to `library/package.json`:

```json
{
  "scripts": {
    "build": "tsc && vite build",
    "prepublishOnly": "bun run build && bun run test",
    "test": "bun test",
    "validate": "npm pack --dry-run"
  }
}
```

## .npmignore

Create `library/.npmignore`:

```
# Source files
src/
*.ts
!*.d.ts

# Config files
tsconfig.json
vite.config.ts
.eslintrc
.prettierrc

# Development
node_modules/
.vscode/
.idea/
*.log

# Tests
__tests__/
*.test.*
*.spec.*

# Docs (keep README.md)
docs/
*.md
!README.md

# Git
.git/
.gitignore

# CI/CD
.github/
```

## Post-publish

1. **Verify on npm**: https://www.npmjs.com/package/islamic-icons
2. **Test installation**: `npm install @rhein.sullivan/islamic-icons`
3. **Update website**: Deploy web-docs with new version
4. **Announce**: Share on social media, community forums
5. **Monitor issues**: Watch GitHub for bug reports

## Troubleshooting

### "Package name already exists"
```bash
# Try scoped package
# Update package.json: "name": "@yourusername/athar"
npm publish --access public
```

### "You must be logged in"
```bash
npm login
# Follow prompts
```

### "403 Forbidden"
```bash
# Check if you have publish rights
npm owner ls athar

# Add yourself as owner (if you own it)
npm owner add yourusername athar
```

### "Missing files in package"
```bash
# Check what will be published
npm pack --dry-run

# Or extract the tarball
npm pack
tar -tzf athar-*.tgz
```

## Resources

- [npm Publishing Guide](https://docs.npmjs.com/cli/v10/commands/npm-publish)
- [package.json Fields](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
- [Semantic Versioning](https://semver.org/)
- [npm Scopes](https://docs.npmjs.com/cli/v10/using-npm/scope)

## Links

- **Package**: https://www.npmjs.com/package/athar
- **Website**: https://athar.vyagra.dev
- **GitHub**: https://github.com/RheinSullivan/athar
- **Issues**: https://github.com/RheinSullivan/athar/issues

---

Made by [Vyagra Nexus](https://vyagranexus.org) | Indonesia

**أثر** — Create something that leaves a lasting impact

Free Palestine and Sudan
