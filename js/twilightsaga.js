console.log("Welcome to the Twilight Saga Fan Site!");

// Smooth scrolling for internal nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Fade-in cards on scroll using Intersection Observer
const faders = document.querySelectorAll('.card');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(card => {
  card.classList.add('fade-in');
  fadeInObserver.observe(card);
});
