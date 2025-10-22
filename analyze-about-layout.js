const puppeteer = require('puppeteer');

async function analyzeLayout() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Desktop view
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('file:///Users/neelketkar/sparrow/public/about.html', {
        waitUntil: 'networkidle0'
    });

    await page.screenshot({
        path: '/Users/neelketkar/sparrow/about-desktop-current.png',
        fullPage: true
    });

    console.log('✓ Desktop screenshot saved');

    // Mobile view
    await page.setViewport({ width: 390, height: 844 });
    await page.goto('file:///Users/neelketkar/sparrow/public/about.html', {
        waitUntil: 'networkidle0'
    });

    await page.screenshot({
        path: '/Users/neelketkar/sparrow/about-mobile-current.png',
        fullPage: true
    });

    console.log('✓ Mobile screenshot saved');

    await browser.close();
}

analyzeLayout().catch(console.error);
