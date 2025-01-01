document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('clicked');
        setTimeout(() => {
            card.classList.remove('clicked');
        }, 300); // Duration of the clickEffect animation
    });
});