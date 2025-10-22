const puppeteer = require('puppeteer');

async function screenshotPage() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    // Load the local about page
    await page.goto('file:///Users/neelketkar/sparrow/public/about.html', {
        waitUntil: 'networkidle0'
    });

    // Take full page screenshot
    await page.screenshot({
        path: '/Users/neelketkar/sparrow/about-page-screenshot.png',
        fullPage: true
    });

    console.log('Screenshot saved to about-page-screenshot.png');

    await browser.close();
}

screenshotPage().catch(console.error);
