
var servicesSlides = document.querySelectorAll(".slide-services");
var oneLink = document.querySelector(".btn-services-1");
var twoLink = document.querySelector(".btn-services-2");
var threeLink = document.querySelector(".btn-services-3");
var btnGuarantee = document.querySelector(".guarantee");
var btnCredit = document.querySelector(".credit");


twoLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  btnGuarantee.classList.add("slide-services-current");
});


threeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  twoLink.classList.remove("slide-services-current");
  btnCredit.classList.add("slide-services-current");
});
