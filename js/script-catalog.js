//Basket-catalog

var btnbuyLink = document.querySelector(".product-list-catalog-grid");
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
