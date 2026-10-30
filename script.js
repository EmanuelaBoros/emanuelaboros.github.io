const year = document.getElementById('year');
const projectStrip = document.getElementById('projectStrip');
const previousProject = document.getElementById('prevProject');
const nextProject = document.getElementById('nextProject');

function scrollProjects(direction) {
  if (!projectStrip) return;
  const card = projectStrip.querySelector('.project-cover');
  const distance = card ? card.offsetWidth + 22 : 360;
  projectStrip.scrollBy({ left: direction * distance, behavior: 'smooth' });
}

if (previousProject && nextProject && projectStrip) {
  previousProject.addEventListener('click', () => scrollProjects(-1));
  nextProject.addEventListener('click', () => scrollProjects(1));
}

if (year) {
  year.textContent = new Date().getFullYear();
}

// Scroll reveal: fade sections in and draw the subject-wave lines
document.documentElement.classList.add('js');
const revealTargets = document.querySelectorAll('.reveal, .waves, .subject-line-section, .pub-chart');
// Anything already on screen at load is shown immediately
revealTargets.forEach((el) => {
  if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-visible');
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// Mark the current page in the main navigation
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach((link) => {
  if (link.getAttribute('href').split('#')[0].split('/').pop() === here && !link.hash) {
    link.setAttribute('aria-current', 'page');
  }
});

// Personal texts: switch between the English version and the Romanian original
document.querySelectorAll('.lang-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const article = btn.closest('.personal-text');
    const ro = btn.getAttribute('aria-pressed') !== 'true';
    article.querySelectorAll('.t-en').forEach((el) => { el.hidden = ro; });
    article.querySelectorAll('.t-ro').forEach((el) => { el.hidden = !ro; });
    btn.setAttribute('aria-pressed', ro);
    btn.textContent = ro ? 'English version' : 'Romanian original';
  });
});
