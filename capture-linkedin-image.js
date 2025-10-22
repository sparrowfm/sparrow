const puppeteer = require('puppeteer');
const path = require('path');

async function captureLinkedInImage() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport to LinkedIn's recommended OG image size
    await page.setViewport({
        width: 1200,
        height: 630,
        deviceScaleFactor: 2 // 2x for retina/high-DPI displays
    });

    const htmlPath = path.resolve(__dirname, 'create-linkedin-image.html');
    await page.goto(`file://${htmlPath}`, {
        waitUntil: 'networkidle0'
    });

    // Capture screenshot
    await page.screenshot({
        path: path.resolve(__dirname, 'public/linkedin-blog-image.png'),
        type: 'png'
    });

    console.log('✓ LinkedIn image created: public/linkedin-blog-image.png');
    console.log('  Size: 1200x630px (LinkedIn optimized)');
    console.log('  Scale: 2x (high quality)');

    await browser.close();
}

captureLinkedInImage().catch(console.error);
