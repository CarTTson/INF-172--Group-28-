        // Podcast List and Episodes links notification
        const podcastListBtn = document.getElementById('podcast-list-btn');
        if (podcastListBtn) {
            podcastListBtn.addEventListener('click', function(event) {
                event.preventDefault();
                alert('Stay tuned! Episodes coming soon.');
            });
        }
        document.querySelectorAll('.episodes-link').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                alert('Stay tuned! Episodes coming soon.');
            });
        });
    // Legal links notification
    document.querySelectorAll('.legal-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Legal information to be determined. Please check back soon.');
        });
    });
document.addEventListener('DOMContentLoaded', () => {
    // Application form confirmation
    const form = document.querySelector('.application-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Application submitted! Thank you — we will contact you within a week.');
            form.reset();
        });
    }

    // Newsletter subscribe notification
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const subscribeBtn = newsletterForm.querySelector('.btn-primary');
        if (subscribeBtn && emailInput) {
            subscribeBtn.addEventListener('click', (event) => {
                event.preventDefault();
                if (emailInput.value.trim() === '') {
                    alert('Please enter your email address to subscribe.');
                } else {
                    alert('Thank you for subscribing! You will now receive updates.');
                    emailInput.value = '';
                }
            });
        }
    }
});
