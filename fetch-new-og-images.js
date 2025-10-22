const puppeteer = require('puppeteer');

const articles = [
    { name: 'Digital Trends - FOX Sports VR', url: 'https://www.digitaltrends.com/computing/fox-sports-virtual-reality-facebook-social-news/' },
    { name: 'Streaming Media - Watson AI', url: 'https://www.streamingmedia.com/Articles/News/Online-Video-News/Fox-Sports-Offers-World-Cup-Highlights-Selected-by-IBM-Watson-AI-125394.aspx' },
    { name: 'THR - Fox Nation', url: 'https://www.hollywoodreporter.com/tv/tv-news/fox-news-launch-fox-nation-streaming-service-1086472/' },
    { name: 'Next TV - FOX Sports PPV', url: 'https://www.nexttv.com/blog/fox-sports-laces-up-for-spence-porter-ppv-boxing-event' },
    { name: 'Yahoo/Altaba - Connected TV', url: 'https://www.altaba.com/news-releases/news-release-details/tv-lovers-rejoice-yahoor-connected-tv-delivers-broadcast' },
    { name: 'Telescope - American Idol', url: 'https://telescope.tv/casestudies/american-idol-s13/' },
    { name: 'Variety - Primetime Streaming', url: 'https://variety.com/2016/tv/news/fox-broadcasting-primetime-live-stream-1201811893/' },
    { name: 'Variety - FOX NOW', url: 'https://variety.com/2017/digital/news/fox-now-app-fx-national-geographic-apple-tv-ios-1202457102/' },
    { name: 'Adweek - Video Podcasts', url: 'https://www.adweek.com/convergent-tv/wondery-evolving-video-podcast-strategy-fast/' }
];

async function fetchOGImages() {
    const browser = await puppeteer.launch({ headless: true });
    const results = [];

    for (const article of articles) {
        console.log(`Fetching ${article.name}...`);
        try {
            const page = await browser.newPage();
            await page.goto(article.url, { waitUntil: 'networkidle0', timeout: 30000 });

            const ogImage = await page.evaluate(() => {
                const ogImageTag = document.querySelector('meta[property="og:image"]');
                const twitterImageTag = document.querySelector('meta[name="twitter:image"]');
                return ogImageTag?.content || twitterImageTag?.content || null;
            });

            if (ogImage) {
                console.log(`  OG Image: ${ogImage}`);
                results.push({ name: article.name, url: article.url, image: ogImage });
            } else {
                console.log(`  No OG image found`);
                results.push({ name: article.name, url: article.url, image: null });
            }

            await page.close();
        } catch (error) {
            console.log(`  Error: ${error.message}`);
            results.push({ name: article.name, url: article.url, image: null });
        }
    }

    await browser.close();

    console.log('\n\n=== RESULTS ===\n');
    results.forEach(r => {
        console.log(`${r.name}:`);
        console.log(`  ${r.image || 'NO IMAGE FOUND'}\n`);
    });
}

fetchOGImages().catch(console.error);
