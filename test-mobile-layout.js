const puppeteer = require('puppeteer');

async function testMobileLayout() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // iPhone 12 Pro viewport
    await page.setViewport({ width: 390, height: 844 });

    // Test homepage
    await page.goto('file:///Users/neelketkar/sparrow/public/index.html', {
        waitUntil: 'networkidle0'
    });

    await page.screenshot({
        path: '/Users/neelketkar/sparrow/mobile-homepage.png',
        fullPage: true
    });

    console.log('✓ Homepage mobile screenshot saved');

    // Test about page
    await page.goto('file:///Users/neelketkar/sparrow/public/about.html', {
        waitUntil: 'networkidle0'
    });

    await page.screenshot({
        path: '/Users/neelketkar/sparrow/mobile-about.png',
        fullPage: true
    });

    console.log('✓ About page mobile screenshot saved');

    await browser.close();
}

testMobileLayout().catch(console.error);
