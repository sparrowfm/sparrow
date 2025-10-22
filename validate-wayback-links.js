const puppeteer = require('puppeteer');

async function validateWaybackLinks() {
    const links = [
        { name: 'TV Guide (2003)', url: 'https://web.archive.org/web/20030401000000/tvguide.com' },
        { name: 'Rovi (2012)', url: 'https://web.archive.org/web/20120101000000/rovicorp.com' },
        { name: 'Fox (2015)', url: 'https://web.archive.org/web/20150101000000/fox.com' },
        { name: 'Wondery (2025)', url: 'https://web.archive.org/web/20250101000000/wondery.com' }
    ];

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const results = [];

    for (const link of links) {
        const page = await browser.newPage();
        try {
            console.log(`\nValidating: ${link.name}`);
            console.log(`URL: ${link.url}`);

            const response = await page.goto(link.url, {
                waitUntil: 'networkidle0',
                timeout: 30000
            });

            const finalUrl = page.url();
            const status = response.status();

            console.log(`Status: ${status}`);
            console.log(`Final URL: ${finalUrl}`);

            // Check if page has content
            const bodyText = await page.evaluate(() => document.body.innerText);
            const hasContent = bodyText.length > 100;

            console.log(`Has content: ${hasContent ? 'Yes' : 'No'} (${bodyText.length} chars)`);

            results.push({
                name: link.name,
                originalUrl: link.url,
                finalUrl: finalUrl,
                status: status,
                hasContent: hasContent,
                success: status === 200 && hasContent
            });

            console.log(`✓ Success: ${status === 200 && hasContent}`);

        } catch (error) {
            console.log(`✗ Error: ${error.message}`);
            results.push({
                name: link.name,
                originalUrl: link.url,
                error: error.message,
                success: false
            });
        }
        await page.close();
    }

    await browser.close();

    console.log('\n\n=== SUMMARY ===\n');
    results.forEach(result => {
        console.log(`${result.name}:`);
        console.log(`  Original: ${result.originalUrl}`);
        if (result.finalUrl) {
            console.log(`  Final: ${result.finalUrl}`);
            console.log(`  Status: ${result.status}`);
            console.log(`  Result: ${result.success ? '✓ VALID' : '✗ FAILED'}`);
        } else {
            console.log(`  Error: ${result.error}`);
            console.log(`  Result: ✗ FAILED`);
        }
        console.log('');
    });

    return results;
}

validateWaybackLinks().catch(console.error);
