document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.flippable-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            card.classList.toggle('flipped');
        });
    });
});