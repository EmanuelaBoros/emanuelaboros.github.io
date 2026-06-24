const slides = Array.from(document.querySelectorAll('.slide'));
const previousButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const year = document.querySelector('#year');
let currentSlide = 0;

year.textContent = new Date().getFullYear();

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function goToNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function goToPreviousSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextButton.addEventListener('click', goToNextSlide);
previousButton.addEventListener('click', goToPreviousSlide);
setInterval(goToNextSlide, 6000);
