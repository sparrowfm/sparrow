#!/bin/bash

# Sparrow Blog Deployment Script
# Commits and pushes changes to GitHub Pages

set -e  # Exit on error

echo "🚀 Deploying Sparrow blog updates..."
echo ""

# Navigate to sparrow directory
cd "$(dirname "$0")"

# Check git status
echo "📊 Checking git status..."
git status
echo ""

# Add all changes
echo "➕ Adding changes..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to commit. Everything is up to date!"
    exit 0
fi

# Show what will be committed
echo ""
echo "📝 Changes to be committed:"
git diff --staged --stat
echo ""

# Prompt for commit message (or use default)
read -p "Enter commit message (or press Enter for default): " COMMIT_MSG

if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Update blog content"
fi

# Commit changes
echo ""
echo "💾 Committing changes..."
git commit -m "$COMMIT_MSG"

# Push to GitHub
echo ""
echo "📤 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your changes will be live at https://sparrowfm.github.io/sparrow/ in a few moments"
echo ""
