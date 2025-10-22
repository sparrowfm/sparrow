# SEO & OG Tag Validation Checklist

This document outlines the comprehensive SEO validation process for the Sparrow blog, based on GEO (Generative Engine Optimization) and technical SEO best practices for 2025.

## Quick Reference: Validation Tools

### Primary Validation Tools

1. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Tests: Open Graph tags
   - Use: Paste your URL and click "Debug" to see how it appears on Facebook

2. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Tests: Open Graph tags
   - Use: Paste URL to preview LinkedIn sharing

3. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Tests: Twitter Card tags
   - Note: May require Twitter developer account

4. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Tests: Structured data (JSON-LD)
   - Use: Test if Google can parse your schema markup

5. **Schema Markup Validator**
   - URL: https://validator.schema.org/
   - Tests: JSON-LD structured data syntax
   - Use: Validates schema.org markup correctness

### Secondary Validation Tools

6. **OpenGraph.xyz**
   - URL: https://www.opengraph.xyz/
   - Tests: All Open Graph and Twitter tags
   - Use: Quick preview of social media cards

7. **Meta Tags Inspector**
   - URL: https://metatags.io/
   - Tests: All meta tags, preview across platforms
   - Use: Comprehensive preview tool

## Validation Checklist for Each Page

### Before Publishing

- [ ] **Title tag** is under 60 characters
- [ ] **Meta description** is 150-160 characters
- [ ] **Keywords** include GEO-optimized terms
- [ ] **Canonical URL** is set correctly
- [ ] **OG image** is 1200x630px and uploaded
- [ ] **OG image alt text** is descriptive
- [ ] **Article dates** are in ISO 8601 format (YYYY-MM-DDT00:00:00Z)
- [ ] **Author information** is complete in JSON-LD
- [ ] **Keywords array** in JSON-LD contains 5-8 relevant terms

### After Publishing - Platform Testing

Test on the following platforms:

1. **Facebook** (https://developers.facebook.com/tools/debug/)
   - [ ] Image displays correctly (1200x630px)
   - [ ] Title appears as expected
   - [ ] Description is compelling
   - [ ] Click "Scrape Again" if caching old data

2. **LinkedIn** (https://www.linkedin.com/post-inspector/)
   - [ ] Preview card shows correctly
   - [ ] Professional image and description
   - [ ] Clear call to action

3. **Twitter** (Test by posting or using validator)
   - [ ] Large image card displays
   - [ ] Title under 70 characters displays fully
   - [ ] Image and text are readable

4. **Google Rich Results**
   - [ ] BlogPosting schema validates
   - [ ] No errors in structured data
   - [ ] All required fields present

5. **WhatsApp** (Send link to yourself)
   - [ ] Link preview displays
   - [ ] Image and title appear

6. **Discord** (Post link in channel)
   - [ ] Rich embed displays
   - [ ] Image loads correctly

7. **Slack** (Share in workspace)
   - [ ] Link unfurls properly
   - [ ] Preview is professional

## GEO (Generative Engine Optimization) Checklist

To optimize for AI-powered search engines (ChatGPT, Perplexity, Gemini, Copilot):

- [ ] **Semantic richness**: Content covers topic clusters comprehensively
- [ ] **Fact density**: Key information is clearly stated and easy to extract
- [ ] **Structured data**: JSON-LD helps AI understand content context
- [ ] **Fresh content**: Dates are current (2025)
- [ ] **Clear headings**: H1-H3 hierarchy is logical
- [ ] **Semantic HTML5**: Use `<article>`, `<main>`, `<header>`, `<footer>`
- [ ] **Lists and tables**: Information formatted for AI parsing
- [ ] **Internal linking**: Related posts are linked
- [ ] **External authority**: Link to credible sources

## Technical SEO Checklist

- [ ] **HTTPS**: All URLs use secure protocol
- [ ] **Mobile responsive**: Design works on all screen sizes
- [ ] **Fast loading**: Images optimized, minimal JS
- [ ] **No broken links**: All internal/external links work
- [ ] **Robots.txt**: Allows crawling (if applicable)
- [ ] **Sitemap**: XML sitemap generated (if applicable)

## Creating OG Images

For each post, create a 1200x630px image:

```bash
# Example using Puppeteer (as documented in Cronkiter post)
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.goto('http://localhost:8000');
await page.screenshot({ path: 'og-image.png' });
```

### OG Image Best Practices

- **Dimensions**: 1200x630px (universal standard)
- **File format**: PNG or JPG
- **File size**: Under 1MB (ideally under 300KB)
- **Content**: Include post title, branding, visual element
- **Text**: Large enough to read in small previews
- **Safe zones**: Keep important content away from edges

## Common Issues & Fixes

### Issue: Facebook shows old cached image
**Fix**: Use Facebook Sharing Debugger and click "Scrape Again"

### Issue: LinkedIn doesn't show preview
**Fix**: Wait 24 hours or use Post Inspector to refresh

### Issue: Twitter card not displaying
**Fix**: Ensure `twitter:card` is set to `summary_large_image`

### Issue: Schema validation errors
**Fix**: Use schema.org validator to identify specific JSON-LD issues

### Issue: Image not loading on social platforms
**Fix**: Ensure image URL is absolute (https://...) and publicly accessible

## Monitoring & Analytics

- **GoatCounter**: Track page views and referrers
  - Dashboard: https://sparrowfm.goatcounter.com
  - Lightweight, privacy-friendly analytics

- **Google Search Console** (if configured):
  - Monitor search performance
  - Check for crawl errors
  - Review rich results status

## Notes for Future Posts

1. **Fill out all placeholders** in `blog-post-template.html` before publishing
2. **Create OG image** for every new post
3. **Validate** on at least 3 platforms (Facebook, LinkedIn, Google) before announcing
4. **Update sitemap** if using XML sitemap
5. **Share strategically** to maximize initial engagement

---

Last updated: October 2025
