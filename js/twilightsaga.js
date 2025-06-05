console.log("Welcome to the Twilight Saga Fan Site ✨");

// Smooth scroll for anchor links in nav
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Reveal card elements on scroll with IntersectionObserver
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  observer.observe(card);
});

// Optional parallax effect for background overlay
window.addEventListener('scroll', () => {
  const overlay = document.querySelector('.background-overlay');
  if (overlay) {
    overlay.style.backgroundPositionY = `${window.scrollY * 0.2}px`;
  }
});

// Animate card on click/tap (add/remove .selected class)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousedown', function() {
    card.classList.add('selected');
  });
  card.addEventListener('touchstart', function() {
    card.classList.add('selected');
  });
  card.addEventListener('mouseup', function() {
    setTimeout(() => card.classList.remove('selected'), 300);
  });
  card.addEventListener('mouseleave', function() {
    card.classList.remove('selected');
  });
  card.addEventListener('touchend', function() {
    setTimeout(() => card.classList.remove('selected'), 300);
  });
});
