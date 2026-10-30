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

// Click-to-enlarge for portfolio plates, drawn on a canvas with a watermark
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
      <canvas role="img"></canvas>
      <div class="lightbox-caption"></div>
    </div>`;
  document.body.appendChild(lightbox);

  const lightboxCanvas = lightbox.querySelector('canvas');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeButton = lightbox.querySelector('.lightbox-close');

  function drawWatermarked(img) {
    if (!img.complete || !img.naturalWidth) {
      img.loading = 'eager';
      img.addEventListener('load', () => drawWatermarked(img), { once: true });
      return;
    }
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    lightboxCanvas.width = w;
    lightboxCanvas.height = h;
    const ctx = lightboxCanvas.getContext('2d');
    ctx.drawImage(img, 0, 0, w, h);

    const size = Math.max(16, Math.round(Math.min(w, h) / 22));
    const stepX = size * 13;
    const stepY = size * 6;
    const reach = Math.hypot(w, h);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.rotate(-Math.PI / 7);
    ctx.font = `500 ${size}px Inter, Helvetica, Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    ctx.lineWidth = Math.max(1, size / 14);
    ctx.strokeStyle = 'rgba(0, 0, 0, .22)';
    ctx.fillStyle = 'rgba(255, 255, 255, .42)';
    let row = 0;
    for (let y = -reach; y <= reach; y += stepY, row += 1) {
      for (let x = -reach + (row % 2) * (stepX / 2); x <= reach; x += stepX) {
        ctx.strokeText('© Emanuela Boros', x, y);
        ctx.fillText('© Emanuela Boros', x, y);
      }
    }
    ctx.restore();
  }

  function openLightbox(img) {
    const caption = img.closest('figure')?.querySelector('figcaption')?.innerText || img.alt || '';
    drawWatermarked(img);
    lightboxCanvas.setAttribute('aria-label', img.alt || caption);
    lightboxCaption.textContent = caption;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
    lightboxCanvas.width = lightboxCanvas.height = 0;
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
