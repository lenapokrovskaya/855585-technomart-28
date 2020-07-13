//Slider

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

//Basket-main

var btnbuyLink = document.querySelector(".product-list-grid");
var buyLink = document.querySelector(".btn-buy");
var basketPopup = document.querySelector(".popup-basket");
var basketClose = basketPopup.querySelector(".close-popup-basket");

btnbuyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (evt.target.classList.value.includes("btn-buy")) {
  basketPopup.classList.add("modal-show");
  }
});

basketClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      basketPopup.classList.remove("modal-show");
    }
  }
});

//Slider-services

var servicesSlides = document.querySelectorAll(".slide-services");
var servicesControls = document.querySelectorAll(".btn-item-services");

servicesControls.forEach((control, index) => {
  control.addEventListener("click", function () {
    servicesControls.forEach((control) => {
      control.classList.remove("btn-item-current");
    });
    servicesSlides.forEach((slide) => {
      slide.classList.remove("slide-services-current");
    });
    control.classList.add("btn-item-current");
    servicesSlides[index].classList.add("slide-services-current");
  })
});

//Map

var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".popup-map");
var mapClose = mapPopup.querySelector(".close-item-map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

 //Feedback-form

var formLink = document.querySelector(".btn-info-contacts");
var formPopup = document.querySelector(".modal-form-feedback");
var formClose = formPopup.querySelector(".close-item");
var modalForm = formPopup.querySelector(".modal-form");
var nameForm = formPopup.querySelector(".modal-name");
var mailForm = formPopup.querySelector(".modal-mail");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

formLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.add("modal-show");

  if (storage) {
  nameForm.value = storage;
  mailForm.focus();
  } else {
  nameForm.focus();
  }
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("modal-show");
  formPopup.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!nameForm.value || !mailForm.value) {
    evt.preventDefault();
    formPopup.classList.remove("modal-error");
    formPopup.offsetWidth = formPopup.offsetWidth;
    formPopup.classList.add("modal-error");
  } else {
  if (isStorageSupport) {
    localStorage.setItem("name", nameForm.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      formPopup.classList.remove("modal-show");
      formPopup.classList.remove("modal-error");
    }
  }
});
