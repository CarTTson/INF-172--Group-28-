// Hamburger menu toggle for mobile
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            const isOpen = mobileMenu.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen);
            mobileMenu.setAttribute('aria-hidden', !isOpen);
            // Toggle navbar visibility
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (isOpen) {
                    navbar.classList.add('menu-open');
                } else {
                    navbar.classList.remove('menu-open');
                }
            }
        });
        // Optional: Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                hamburger.setAttribute('aria-expanded', false);
                mobileMenu.setAttribute('aria-hidden', true);
                // Remove menu-open class from navbar
                const navbar = document.querySelector('.navbar');
                if (navbar) {
                    navbar.classList.remove('menu-open');
                }
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.flippable-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
        });
    });
});