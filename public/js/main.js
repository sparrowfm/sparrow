// Sparrow Blog - Main JavaScript

// Newsletter form handler (placeholder - replace with your email service)
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitButton = newsletterForm.querySelector('button');
            const email = emailInput.value;

            // Disable form during submission
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';

            try {
                // TODO: Replace with your actual newsletter service
                // Options: ConvertKit, Substack, Mailchimp, etc.
                console.log('Newsletter signup:', email);

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Success
                submitButton.textContent = 'Subscribed! ✓';
                submitButton.style.background = '#10b981';
                emailInput.value = '';

                // Reset after 3 seconds
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Subscribe';
                    submitButton.style.background = '';
                }, 3000);

            } catch (error) {
                console.error('Newsletter signup error:', error);
                submitButton.textContent = 'Error - Try Again';
                submitButton.disabled = false;
            }
        });
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add copy button to code blocks
document.querySelectorAll('pre code').forEach((block) => {
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.textContent = 'Copy';
    button.addEventListener('click', () => {
        navigator.clipboard.writeText(block.textContent).then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        });
    });
    block.parentNode.style.position = 'relative';
    block.parentNode.appendChild(button);
});
