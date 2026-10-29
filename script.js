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


// Click-to-enlarge for portfolio plates
const portfolioImages = document.querySelectorAll('.portfolio-plate img');
if (portfolioImages.length) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Large image preview');
  lightbox.innerHTML = `
    <div class="lightbox-inner">
      <button class="lightbox-close" type="button" aria-label="Close image preview">×</button>
      <img alt="" />
      <div class="lightbox-caption"></div>
    </div>`;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeButton = lightbox.querySelector('.lightbox-close');

  function openLightbox(img) {
    const caption = img.closest('figure')?.querySelector('figcaption')?.innerText || img.alt || '';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || caption;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  portfolioImages.forEach((img) => {
    img.addEventListener('click', () => openLightbox(img));
    img.setAttribute('tabindex', '0');
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(img);
      }
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
}


// Scroll reveal: fade sections in and draw the subject-wave lines
document.documentElement.classList.add('js');
const revealTargets = document.querySelectorAll('.reveal, .waves, .subject-line-section');
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
