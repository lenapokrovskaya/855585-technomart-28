var btnbuyLink = document.querySelector(".product-list-catalog-grid");
var buyLink = document.querySelector(".btn-buy");

 var basketPopup = document.querySelector(".popup-basket");
 var basketClose = basketPopup.querySelector(".close-popup-basket");



 btnbuyLink.addEventListener("click", function (evt) {
   let buyLink = event.target.closest(".product-list-catalog-grid");
   if (!".btn-buy") return;
  if (event.target.contains(".btn-buy")) return; {
    basketPopup.classList.add("modal-show");

     });

















 buyLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   basketPopup.classList.add("modal-show");
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
