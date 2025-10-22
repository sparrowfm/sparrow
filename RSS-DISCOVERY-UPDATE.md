# RSS Discovery - Visible Link Added

## ✅ What Changed

Added a visible **RSS link** in the footer of all pages so users can easily find and subscribe to your feed.

### Location
**Footer** - Next to About, LinkedIn, and GitHub links

### Visual Style
- **Icon**: Standard RSS icon (orange with radio waves) - inline SVG
- **Text**: "RSS"
- **Tooltip**: "Subscribe via RSS" (appears on hover)
- **Link**: Opens feed.xml in new tab

### Files Updated (7 total)
1. `public/index.html` - Homepage
2. `blog-post-template.html` - Template for future posts
3. `public/posts/airtable-aws-integration-patterns.html`
4. `public/posts/deploying-ffmpeg-to-aws-lambda.html`
5. `public/posts/building-cronkiter-vintage-audio-transformer.html`
6. `public/posts/building-this-blog-with-claude-code.html`
7. `public/posts/why-i-started-with-whisper-locally.html`

---

## How Users Will Find Your RSS Feed

### 1. **Visible Footer Link** (NEW!)
Users can now see the **RSS icon + "RSS"** text in the footer of every page:
```
About | LinkedIn | GitHub | [RSS icon] RSS
```

- Standard orange RSS icon with radio waves (inline SVG)
- Clicking opens the RSS feed in a new tab
- Tooltip shows "Subscribe via RSS" on hover
- Consistent across all pages

### 2. **RSS Reader Auto-Discovery** (Already implemented)
RSS readers and browser extensions automatically detect your feed via the `<link>` tag in the HTML `<head>`:
```html
<link rel="alternate" type="application/rss+xml"
      title="Building in Public RSS Feed"
      href="https://sparrowfm.github.io/sparrow/feed.xml">
```

**Browsers/extensions that support this**:
- Firefox (shows RSS icon in address bar)
- RSS reader browser extensions (Feedbro, RSS Feed Reader, etc.)
- Safari (with RSS extension)

### 3. **Direct URL**
Users can subscribe by copying the feed URL directly:
```
https://sparrowfm.github.io/sparrow/feed.xml
```

---

## User Journey Examples

### Scenario 1: Casual Reader
1. Visits your blog homepage
2. Scrolls to footer
3. Sees **RSS icon + "RSS"** link (recognizable orange RSS icon)
4. Clicks it → Opens feed.xml
5. Copies URL to their RSS reader (Feedly, NetNewsWire, etc.)

### Scenario 2: RSS Enthusiast with Browser Extension
1. Visits your blog
2. RSS extension icon lights up in browser toolbar
3. Clicks extension icon
4. Sees "Building in Public RSS Feed"
5. Clicks "Subscribe" → Feed added automatically

### Scenario 3: Direct Subscription
1. Already knows your blog URL
2. Opens Feedly/NewsBlur/other reader
3. Pastes: `https://sparrowfm.github.io/sparrow/`
4. Reader auto-discovers feed
5. Subscribes

---

## What It Looks Like

### Footer (After Update)
```
© 2025 Neel Ketkar. All rights reserved.

About | LinkedIn | GitHub | [RSS icon] RSS
      ↑                                   ↑
   Internal link                   Opens feed.xml
```

The RSS icon is the standard orange icon with radio waves, rendered as inline SVG.

### On Hover
When users hover over the RSS link:
- **Tooltip appears**: "Subscribe via RSS"
- **Cursor changes**: Pointer (indicating it's clickable)

### When Clicked
- Opens `feed.xml` in a new tab
- User sees the raw XML feed (or browser RSS viewer if supported)
- User can then copy URL to add to their RSS reader

---

## RSS Icon Implementation

The standard RSS icon is implemented as an inline SVG for consistent cross-platform rendering:

```html
<a href="feed.xml" target="_blank" rel="noopener" title="Subscribe via RSS">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle; margin-right: 4px;">
        <rect width="24" height="24" rx="4" fill="#FF6600"/>
        <circle cx="6" cy="18" r="2" fill="white"/>
        <path d="M4 11C9.52 11 14 15.48 14 21" stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M4 4C13.94 4 22 12.06 22 22" stroke="white" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>
    RSS
</a>
```

**Icon Features**:
- 16x16px size (scales cleanly)
- Orange background (#FF6600) - standard RSS color
- White radio waves - universally recognized RSS symbol
- Rounded corners (4px radius)
- Inline SVG for guaranteed consistency (no emoji rendering differences across platforms)

---

## Testing the Visible Link

### After Deployment

1. **Visit homepage**: https://sparrowfm.github.io/sparrow/
2. **Scroll to footer**
3. **Verify**:
   - ✅ RSS icon (orange with radio waves) + "RSS" text is visible
   - ✅ Tooltip shows "Subscribe via RSS" on hover
   - ✅ Clicking opens feed.xml in new tab
   - ✅ Feed.xml loads correctly (not 404)

4. **Visit a blog post**
5. **Scroll to footer**
6. **Verify**: Same RSS link appears

---

## Deployment

Include these additional files in your git commit:

```bash
cd ~/aviary-v2/sparrow

git add \
  public/index.html \
  blog-post-template.html \
  public/posts/airtable-aws-integration-patterns.html \
  public/posts/deploying-ffmpeg-to-aws-lambda.html \
  public/posts/building-cronkiter-vintage-audio-transformer.html \
  public/posts/building-this-blog-with-claude-code.html \
  public/posts/why-i-started-with-whisper-locally.html

git commit -m "Add RSS feed with standard icon, update About Me sections"
git push origin main
```

Or use the updated deploy script:
```bash
./deploy-rss.sh
```

---

## Summary

**Before**: RSS feed was only discoverable via:
- Hidden `<link>` tag in HTML (for auto-discovery)
- Direct URL knowledge

**After**: RSS feed is discoverable via:
- ✅ **Visible footer link with standard RSS icon** on every page (NEW!)
- ✅ Hidden `<link>` tag in HTML (for auto-discovery)
- ✅ Direct URL

**Implementation Details**:
- Standard RSS icon (orange #FF6600 with white radio waves)
- Inline SVG for consistent rendering across all platforms
- Recognizable to all RSS users
- Professional appearance

**Result**: Users can easily find and subscribe to your RSS feed!

---

*Updated: October 22, 2025*
