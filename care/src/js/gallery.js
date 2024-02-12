const openModal = document.querySelector(".js-open-gallery");
// const closeModal = document.querySelector(".js-close-gallery");
const backdropJs = document.querySelector(".js-backdrop-gallery");

// Зробили клік на ссилку через деоегування подій
const link = document.querySelector(".gallery");

openModal.addEventListener("click", onOpenModal);
// closeModal.addEventListener("click", onCloseModal);
backdropJs.addEventListener("click", onBackdropClick);

link.addEventListener("click", onCloseLinkClick);

function onOpenModal() {
  document.body.classList.add("is-hidden");
  // backdropJs.classList.toggle("is-open");
  document.body.classList.add("show-modal-2");
}

function onCloseModal() {
  document.body.classList.remove("is-hidden");
  // backdropJs.classList.toggle("is-open");
  document.body.classList.remove("show-modal-2");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onCloseLinkClick(event) {
  if (event.target.nodeName === "IMG") {
    // console.log(event.target.nodeName);
    // onCloseModal();
    onOpenModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}
