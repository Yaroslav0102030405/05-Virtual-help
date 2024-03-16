// const openModal = document.querySelector(".js-open-gallery");
// // const closeModal = document.querySelector(".js-close-gallery");
// const backdropJs = document.querySelector(".js-backdrop-gallery");

// // Зробили клік на ссилку через деоегування подій
// const link = document.querySelector(".gallery");

// openModal.addEventListener("click", onOpenModal);
// // closeModal.addEventListener("click", onCloseModal);
// backdropJs.addEventListener("click", onBackdropClick);

// link.addEventListener("click", onCloseLinkClick);

// function onOpenModal() {
//   // backdropJs.classList.toggle("is-open");
//   document.body.classList.add("show-modal-2");
//   document.body.classList.add("is-hidden");
// }

// function onCloseModal() {
//   document.body.classList.remove("is-hidden");
//   // backdropJs.classList.toggle("is-open");
//   document.body.classList.remove("show-modal-2");
// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     onCloseModal();
//   }
// }

// function onCloseLinkClick(event) {
//   if (event.target.nodeName === "IMG") {
//     // console.log(event.target.nodeName);
//     // onCloseModal();
//     onOpenModal();
//   }
// }

// function onEscKeyPress(event) {
//   if (event.code === "Escape") {
//     onCloseModal();
//   }
// }

// Шаги логики
// 1 Получить ссылку на карточки на слайдер на кнопки
// 2 Перебарть циклом вор всю коллекцию чтобы получить доступ и повесить на них клик

const cards = document.querySelectorAll(".gallery__card"),
  pictures = document.querySelectorAll(".gallery__image"),
  slider = document.querySelector(".slider"),
  sliderContainer = document.querySelector(".slider__container"),
  sliderBtnLeft = document.querySelector(".slider__btn-left"),
  sliderBtnRight = document.querySelector(".slider__btn-right"),
  sliderClose = document.querySelector(".slider__btn-close");

let cardIndex = 0,
  pictureFull = null,
  newPictureFull = null;

const closeSlider = () => {
  pictureFull && pictureFull.remove();

  newPictureFull && newPictureFull.remove();

  slider.classList.add("hidden");
  document.body.classList.remove("is-hidden");
};

sliderBtnLeft.addEventListener("click", () => changePicture("left"));
sliderBtnRight.addEventListener("click", () => changePicture("right"));
sliderClose.addEventListener("click", () => closeSlider());
slider.addEventListener("click", onBackdropClick);

// Перебираем коллекцию карточек
// на каждую карточку вешам прослушиать клик и функцию при клике открыть модалку
cards.forEach((item, index) => {
  item.addEventListener("click", () => {
    cardIndex = index;
    openModal();
  });
});

const openModal = () => {
  pictureFull = pictures[cardIndex].cloneNode();
  pictureFull.style.widht = "100%";
  sliderContainer.append(pictureFull);
  slider.classList.remove("hidden");
  document.body.classList.add("is-hidden");
};

// const changePicture = (dir) => {
//   if ("left") {
//     cardIndex > 0 ? cardIndex-- : (cardIndex = cards.length - 1);
//     // cardIndex - 1;
//   } else if ("right") {
//     cardIndex < cards.length - 1 ? cardIndex++ : (cardIndex = 0);
//     // cardIndex + 1;
//   } else {
//     return;
//   }
// };

// newPictureFull = pictures[cardIndex].cloneNode();
// newPictureFull.style.widht = "100%";

// pictureFull.replaceWith(newPictureFull);
// pictureFull = newPictureFull;

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeSlider();
  }
}
