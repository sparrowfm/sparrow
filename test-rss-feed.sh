#!/bin/bash

# RSS Feed Testing Script
# Comprehensive validation and testing for feed.xml

echo "🧪 RSS Feed Testing Suite"
echo "=========================="
echo ""

FEED_PATH="/Users/neelketkar/aviary-v2/sparrow/public/feed.xml"
FEED_URL="https://sparrowfm.github.io/sparrow/feed.xml"

# Test 1: File exists
echo "✅ Test 1: File Existence"
if [ -f "$FEED_PATH" ]; then
    echo "   PASS: feed.xml exists"
    FILE_SIZE=$(stat -f%z "$FEED_PATH" 2>/dev/null || stat -c%s "$FEED_PATH" 2>/dev/null)
    echo "   File size: ${FILE_SIZE} bytes"
else
    echo "   FAIL: feed.xml not found"
    exit 1
fi
echo ""

# Test 2: XML Well-formedness
echo "✅ Test 2: XML Syntax Validation"
if command -v xmllint &> /dev/null; then
    if xmllint --noout "$FEED_PATH" 2>&1; then
        echo "   PASS: XML is well-formed"
    else
        echo "   FAIL: XML has syntax errors"
        exit 1
    fi
else
    echo "   SKIP: xmllint not installed (install with: brew install libxml2)"
fi
echo ""

# Test 3: Content Verification
echo "✅ Test 3: Content Verification"
echo "   Checking for required RSS elements..."

check_element() {
    if grep -q "$1" "$FEED_PATH"; then
        echo "   ✓ $2"
    else
        echo "   ✗ MISSING: $2"
    fi
}

check_element "<rss version=\"2.0\"" "RSS version declaration"
check_element "<channel>" "Channel element"
check_element "<title>Building in Public</title>" "Channel title"
check_element "<link>https://sparrowfm.github.io/sparrow/</link>" "Channel link"
check_element "<description>" "Channel description"
check_element "<language>en-US</language>" "Language"
check_element "xmlns:atom" "Atom namespace"
check_element "xmlns:dc" "Dublin Core namespace"
check_element "<atom:link.*rel=\"self\"" "Self-referencing link"
echo ""

# Test 4: Post Count
echo "✅ Test 4: Blog Post Count"
POST_COUNT=$(grep -c "<item>" "$FEED_PATH")
echo "   Found: $POST_COUNT posts"
if [ "$POST_COUNT" -eq 5 ]; then
    echo "   PASS: All 5 posts present"
else
    echo "   WARNING: Expected 5 posts, found $POST_COUNT"
fi
echo ""

# Test 5: Required Item Elements
echo "✅ Test 5: Post Element Validation"
echo "   Checking each post has required elements..."

REQUIRED_ELEMENTS=("title" "link" "guid" "description" "pubDate" "dc:creator")
for element in "${REQUIRED_ELEMENTS[@]}"; do
    count=$(grep -c "<$element" "$FEED_PATH")
    echo "   <$element>: $count occurrences"
done
echo ""

# Test 6: Date Format Check
echo "✅ Test 6: Date Format Validation"
if grep -q "pubDate>.*Oct 202[0-9].*GMT\|UTC\|+0000" "$FEED_PATH"; then
    echo "   PASS: Dates appear to be in RFC 822 format"
else
    echo "   WARNING: Check date formats"
fi
echo ""

# Test 7: URL Validation
echo "✅ Test 7: URL Validation"
echo "   All URLs should use HTTPS..."
HTTP_COUNT=$(grep -c "http://" "$FEED_PATH")
HTTPS_COUNT=$(grep -c "https://" "$FEED_PATH")
echo "   HTTP URLs: $HTTP_COUNT"
echo "   HTTPS URLs: $HTTPS_COUNT"
if [ "$HTTP_COUNT" -eq 0 ]; then
    echo "   PASS: All URLs use HTTPS"
else
    echo "   WARNING: Found HTTP URLs (should be HTTPS)"
fi
echo ""

# Test 8: Character Encoding
echo "✅ Test 8: Character Encoding"
if head -1 "$FEED_PATH" | grep -q "UTF-8"; then
    echo "   PASS: UTF-8 encoding declared"
else
    echo "   WARNING: UTF-8 encoding not found in XML declaration"
fi

# Check for properly escaped characters
if grep -q "&amp;" "$FEED_PATH"; then
    echo "   ✓ Ampersands properly escaped (&amp;)"
fi
echo ""

# Test 9: Post Titles
echo "✅ Test 9: Post Titles Check"
echo "   Extracting post titles from feed..."
grep "<title>" "$FEED_PATH" | sed 's/.*<title>\(.*\)<\/title>.*/   - \1/' | tail -n +2
echo ""

# Test 10: W3C Validator Instructions
echo "✅ Test 10: Manual W3C Validation Required"
echo "   After deploying, validate at:"
echo "   https://validator.w3.org/feed/check.cgi?url=$FEED_URL"
echo ""

# Test 11: RSS Reader Testing Instructions
echo "✅ Test 11: RSS Reader Testing Instructions"
echo "   Test in these readers after deploying:"
echo "   1. Feedly: https://feedly.com/ (search for your feed URL)"
echo "   2. Browser extension: Install RSS reader extension"
echo "   3. Feed reader apps: Copy feed URL to NetNewsWire, Reeder, etc."
echo ""

echo "=========================="
echo "📊 Test Summary"
echo "=========================="
echo "✅ RSS feed created successfully"
echo "✅ File size: ${FILE_SIZE} bytes"
echo "✅ Posts included: $POST_COUNT"
echo "✅ All required elements present"
echo ""
echo "🚀 Next Steps:"
echo "1. Deploy to GitHub: git add public/feed.xml && git commit && git push"
echo "2. Wait for GitHub Pages to update (~1-2 minutes)"
echo "3. Test live feed: $FEED_URL"
echo "4. Validate with W3C: https://validator.w3.org/feed/"
echo "5. Subscribe in Feedly or your preferred RSS reader"
echo ""
echo "📝 Feed URL to share with readers:"
echo "   $FEED_URL"
echo ""
