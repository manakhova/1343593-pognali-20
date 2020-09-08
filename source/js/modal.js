var modal = document.querySelector('.modal');
var modalButton = document.querySelector('.modal__button');
var addModal = document.querySelector('.add-profile__link');

addModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal--closed");
});

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--closed");
});
