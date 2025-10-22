#!/bin/bash

# Deploy RSS Feed to GitHub Pages

echo "🚀 Deploying RSS Feed to GitHub Pages"
echo "======================================"
echo ""

cd "$(dirname "$0")"

# Check if we're in a git repo
if [ ! -d .git ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Show what will be deployed
echo "📝 Files to deploy:"
echo "   - public/feed.xml (RSS feed)"
echo "   - public/index.html (homepage with RSS link)"
echo "   - blog-post-template.html (template with RSS link)"
echo "   - public/posts/*.html (all 5 posts with RSS links)"
echo ""

# Add files
echo "➕ Adding files..."
git add public/feed.xml \
        public/index.html \
        blog-post-template.html \
        public/posts/airtable-aws-integration-patterns.html \
        public/posts/deploying-ffmpeg-to-aws-lambda.html \
        public/posts/building-cronkiter-vintage-audio-transformer.html \
        public/posts/building-this-blog-with-claude-code.html \
        public/posts/why-i-started-with-whisper-locally.html

# Show status
echo ""
echo "📊 Git status:"
git status --short
echo ""

# Commit
read -p "Commit message (or press Enter for default): " COMMIT_MSG
if [ -z "$COMMIT_MSG" ]; then
    COMMIT_MSG="Add RSS feed with standard icon, update About Me sections"
fi

echo ""
echo "💾 Committing..."
git commit -m "$COMMIT_MSG"

# Push
echo ""
echo "📤 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "⏱  GitHub Pages will update in 1-2 minutes"
echo ""
echo "🧪 Next steps:"
echo "   1. Wait for GitHub Pages to update"
echo "   2. Visit: https://sparrowfm.github.io/sparrow/feed.xml"
echo "   3. Validate: https://validator.w3.org/feed/check.cgi?url=https://sparrowfm.github.io/sparrow/feed.xml"
echo "   4. Test in Feedly: https://feedly.com/"
echo "   5. Check RSS discovery: Visit homepage with RSS reader extension"
echo ""
echo "📰 RSS Feed URL to share:"
echo "   https://sparrowfm.github.io/sparrow/feed.xml"
echo ""
