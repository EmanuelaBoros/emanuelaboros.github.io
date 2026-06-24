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
