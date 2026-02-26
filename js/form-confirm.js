document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.application-form');
    if (!form) {
        console.warn('No application form found for confirmation handler.');
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // simple confirmation popup
        alert('Application submitted! Thank you — we will contact you within a week.');
        form.reset();
    });
});
