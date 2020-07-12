var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".slider-toggle");
var nextSlideBtn = document.querySelector(".btn-next");
var prevSlideBtn = document.querySelector(".btn-back");

var slideIndex = 1;

showSlides(slideIndex);

function plusSlide(n) {
  slideIndex = slideIndex + n;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

nextSlideBtn.addEventListener('click', function () {
  plusSlide(1);
});
prevSlideBtn.addEventListener('click', function () {
  plusSlide(-1);
});

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', function () {
    currentSlide(i+1);
  });
}

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (var j = 0; j < slides.length; j++) {
    slides[j].classList.remove('slide-current');
    dots[j].classList.remove('slider-toggle-current');
  }


  dots[slideIndex-1].classList.add('slider-toggle-current');
  slides[slideIndex-1].classList.add('slide-current');
}
