# How to Update Your Sparrow Blog

This guide explains how to make changes to your blog and deploy them automatically.

## Your Blog Setup

- **Live URL**: https://sparrowfm.github.io/sparrow
- **GitHub Repo**: https://github.com/sparrowfm/sparrow
- **Local Directory**: `/Users/neelketkar/sparrow`

Every push to the `main` branch automatically deploys to GitHub Pages in ~30 seconds.

---

## Option 1: Edit on GitHub (Quick Changes)

Best for: Small edits, typo fixes, quick content updates

### Steps:

1. **Go to your repo**: https://github.com/sparrowfm/sparrow

2. **Navigate to the file** you want to edit (e.g., `public/index.html`)

3. **Click the pencil icon** (Edit this file)

4. **Make your changes**

5. **Commit changes**:
   - Add a commit message describing what you changed
   - Click "Commit changes"

6. **Wait ~30 seconds** for automatic deployment
   - Watch progress: https://github.com/sparrowfm/sparrow/actions
   - Look for green checkmark ✅

7. **Sync your local copy**:
   ```bash
   cd /Users/neelketkar/sparrow
   git pull
   ```

---

## Option 2: Edit Locally (Recommended for Larger Changes)

Best for: Multiple files, new blog posts, major updates, testing locally

### Steps:

1. **Navigate to your project**:
   ```bash
   cd /Users/neelketkar/sparrow
   ```

2. **Make your edits** to files in the `public/` directory:
   - Homepage: `public/index.html`
   - Blog posts: `public/posts/*.html`
   - Styles: `public/css/style.css`
   - JavaScript: `public/js/main.js`

3. **Preview locally** (optional):
   ```bash
   cd public
   python3 -m http.server 8000
   # Visit: http://localhost:8000
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Describe your changes here"
   ```

5. **Push to GitHub**:
   ```bash
   git push
   ```

6. **Wait ~30 seconds** for automatic deployment
   - Watch progress: https://github.com/sparrowfm/sparrow/actions
   - Changes will be live at: https://sparrowfm.github.io/sparrow

---

## Common Tasks

### Adding a New Blog Post

1. Create new HTML file:
   ```bash
   # Copy the template from existing post
   cp public/posts/deploying-ffmpeg-to-aws-lambda.html public/posts/your-new-post.html
   ```

2. Edit the new file with your content

3. Update `public/index.html` to add the post card to the homepage

4. Commit and push:
   ```bash
   git add .
   git commit -m "Add new blog post: Your Post Title"
   git push
   ```

### Updating Styles

1. Edit: `public/css/style.css`

2. Commit and push:
   ```bash
   git add public/css/style.css
   git commit -m "Update styles"
   git push
   ```

### Checking Deployment Status

```bash
# View recent deployments
gh run list --repo sparrowfm/sparrow --limit 5

# Or visit:
# https://github.com/sparrowfm/sparrow/actions
```

---

## Troubleshooting

### Local copy out of sync?

```bash
cd /Users/neelketkar/sparrow
git pull
```

### Deployment failed?

1. Check the Actions tab: https://github.com/sparrowfm/sparrow/actions
2. Click on the failed run to see error logs
3. Fix the issue and push again

### Changes not showing up?

1. Wait ~1-2 minutes (GitHub Pages can cache)
2. Hard refresh your browser: `Cmd + Shift + R` (Mac)
3. Check deployment succeeded (green checkmark in Actions)

---

## File Structure

```
sparrow/
├── public/              # All site files (what gets deployed)
│   ├── index.html      # Homepage
│   ├── css/
│   │   └── style.css   # Styles
│   ├── js/
│   │   └── main.js     # JavaScript
│   └── posts/          # Blog posts
│       └── *.html
├── .github/
│   └── workflows/
│       └── deploy.yml  # Auto-deployment config
├── README.md
└── HOW-TO-UPDATE.md    # This file
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Pull latest changes | `git pull` |
| Stage all changes | `git add .` |
| Commit changes | `git commit -m "message"` |
| Push to GitHub | `git push` |
| Preview locally | `cd public && python3 -m http.server 8000` |
| Check status | `gh run list --repo sparrowfm/sparrow --limit 5` |

---

## Need Help?

- **GitHub Actions**: https://github.com/sparrowfm/sparrow/actions
- **Live Site**: https://sparrowfm.github.io/sparrow
- **Repository**: https://github.com/sparrowfm/sparrow
