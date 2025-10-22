const puppeteer = require('puppeteer');
const path = require('path');

async function captureLinkedInImageSquare() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport to square size (LinkedIn optimized)
    await page.setViewport({
        width: 1080,
        height: 1080,
        deviceScaleFactor: 2 // 2x for retina/high-DPI displays
    });

    const htmlPath = path.resolve(__dirname, 'create-linkedin-image-square.html');
    await page.goto(`file://${htmlPath}`, {
        waitUntil: 'networkidle0'
    });

    // Capture screenshot
    await page.screenshot({
        path: path.resolve(__dirname, 'public/linkedin-blog-image-square.png'),
        type: 'png'
    });

    console.log('✓ LinkedIn square image created: public/linkedin-blog-image-square.png');
    console.log('  Size: 1080x1080px (square format)');
    console.log('  Scale: 2x (high quality)');

    await browser.close();
}

captureLinkedInImageSquare().catch(console.error);
