const puppeteer = require('puppeteer');

async function fetchOGImages() {
    const articles = [
        { name: '9to5Mac Dolby Atmos', url: 'https://9to5mac.com/2022/05/11/dolby-atmos-coming-to-podcasts-with-wondery-as-first-supported-platform/' },
        { name: 'Adweek Video Podcasts', url: 'https://www.adweek.com/convergent-tv/wondery-evolving-video-podcast-strategy-fast/' },
        { name: 'Variety Wondery+', url: 'https://variety.com/2020/digital/news/wondery-app-podcast-subscription-1234646024/' },
        { name: 'Variety FOX NOW', url: 'https://variety.com/2017/digital/news/fox-now-app-fx-national-geographic-apple-tv-ios-1202457102/' },
        { name: 'Variety FX+', url: 'https://variety.com/2017/tv/news/fx-to-offer-6-subscription-service-fx-for-ad-free-episodes-via-comcast-1202516833/' },
        { name: 'Space.com Cosmos', url: 'https://www.space.com/25560-cosmos-tv-show-smartphone-app.html' },
        { name: 'THR Apple Podcasts', url: 'https://www.hollywoodreporter.com/business/digital/wondery-apple-podcast-subscriptions-1234950864/' },
        { name: 'NBC News Rovi', url: 'https://www.nbcnews.com/id/wbna40944754' }
    ];

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const results = [];

    for (const article of articles) {
        const page = await browser.newPage();
        try {
            console.log(`Fetching ${article.name}...`);
            await page.goto(article.url, { waitUntil: 'networkidle0', timeout: 30000 });

            const ogImage = await page.evaluate(() => {
                const ogImageTag = document.querySelector('meta[property="og:image"]');
                const twitterImageTag = document.querySelector('meta[name="twitter:image"]');
                return ogImageTag?.content || twitterImageTag?.content || null;
            });

            results.push({
                name: article.name,
                url: article.url,
                ogImage: ogImage
            });

            console.log(`  OG Image: ${ogImage || 'NOT FOUND'}`);
        } catch (error) {
            console.log(`  Error: ${error.message}`);
            results.push({ name: article.name, url: article.url, ogImage: null });
        }
        await page.close();
    }

    await browser.close();

    console.log('\n\n=== RESULTS ===\n');
    results.forEach(r => {
        console.log(`${r.name}:`);
        console.log(`  ${r.ogImage || 'NO IMAGE FOUND'}\n`);
    });

    return results;
}

fetchOGImages().catch(console.error);
