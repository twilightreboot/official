document.querySelectorAll('.movie-list li').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('clicked');
        setTimeout(() => {
            item.classList.remove('clicked');
        }, 300); // Duration of the clickEffect animation
    });
});