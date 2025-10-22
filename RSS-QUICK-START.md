# RSS Feed Quick Start Guide

## 📰 Your RSS Feed URL
```
https://sparrowfm.github.io/sparrow/feed.xml
```

## 🚀 Deploy Now

```bash
cd ~/aviary-v2/sparrow
chmod +x deploy-rss.sh
./deploy-rss.sh
```

Or manually:
```bash
cd ~/aviary-v2/sparrow
git add public/feed.xml public/index.html blog-post-template.html public/posts/*.html
git commit -m "Add RSS feed with all 5 blog posts"
git push origin main
```

## ✅ After Deployment (1-2 minutes)

### 1. Verify Feed Loads
Visit: https://sparrowfm.github.io/sparrow/feed.xml
(Should show XML, not 404)

### 2. Validate with W3C
Visit: https://validator.w3.org/feed/check.cgi?url=https://sparrowfm.github.io/sparrow/feed.xml
(Should say "This is a valid RSS feed")

### 3. Test in Feedly
1. Go to: https://feedly.com/
2. Search for: `https://sparrowfm.github.io/sparrow/feed.xml`
3. Click "Follow"
4. Verify all 5 posts appear

### 4. Test RSS Discovery
1. Visit: https://sparrowfm.github.io/sparrow/
2. Use RSS reader browser extension
3. Extension should auto-detect feed

## 📝 What Was Created

| File | Purpose |
|------|---------|
| `public/feed.xml` | RSS 2.0 feed with 5 posts |
| `deploy-rss.sh` | Deployment script |
| `test-rss-feed.sh` | Testing script |
| `RSS-TEST-RESULTS.md` | Full test documentation |
| `RSS-FEED-SUMMARY.md` | Complete implementation guide |
| `RSS-QUICK-START.md` | This file! |

## ✅ What's Included

- **5 blog posts** (newest to oldest):
  1. Building Airtable + AWS Integrations (Oct 22)
  2. Why I Started with Whisper Locally (Oct 22)
  3. Building This Blog with Claude Code (Oct 21)
  4. Building Cronkiter (Oct 21)
  5. Deploying FFmpeg to AWS Lambda (Oct 19)

- **RSS discovery links** added to:
  - Homepage
  - Blog post template
  - All 5 existing posts

## 🔄 When You Publish a New Post

1. **Update feed.xml**: Add new `<item>` at the top (after `<channel>`)
2. **Update lastBuildDate**: Change to current date/time
3. **Deploy**: Run `./deploy-rss.sh` or git commit/push manually

### New Item Template
```xml
<item>
  <title>Your Post Title</title>
  <link>https://sparrowfm.github.io/sparrow/posts/your-slug.html</link>
  <guid isPermaLink="true">https://sparrowfm.github.io/sparrow/posts/your-slug.html</guid>
  <description>Your post summary...</description>
  <pubDate>Mon, 23 Oct 2025 00:00:00 +0000</pubDate>
  <dc:creator>Neel Ketkar</dc:creator>
  <category>Category1</category>
</item>
```

### Get Current Date (RFC 822 format)
```bash
date -u "+%a, %d %b %Y %H:%M:%S +0000"
```

## 📊 Feed Stats

- **Format**: RSS 2.0
- **Posts**: 5 (with room for more)
- **Size**: ~5.5KB
- **Validation**: All automated tests passed
- **Compliance**: RSS 2.0, Atom, Dublin Core namespaces

## 🎯 Next Steps

1. ✅ **Deploy** (run deploy-rss.sh)
2. ⏳ **Wait** 1-2 minutes for GitHub Pages
3. ✅ **Test** (visit feed URL, validate W3C)
4. ✅ **Subscribe** (add to Feedly or your reader)
5. 🎉 **Share** (tell your readers!)

## 💡 Share With Readers

Add this to your blog:

> 📰 **Subscribe via RSS**: Never miss a post! Add `https://sparrowfm.github.io/sparrow/feed.xml` to your RSS reader.

## 📚 Documentation

- **Full Details**: `RSS-FEED-SUMMARY.md`
- **Test Results**: `RSS-TEST-RESULTS.md`
- **This Guide**: `RSS-QUICK-START.md`

---

**Need help?** Check RSS-FEED-SUMMARY.md for complete documentation!
