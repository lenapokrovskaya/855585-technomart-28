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
