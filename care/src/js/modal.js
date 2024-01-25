// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-open-modal]"),
//     closeModalBtn: document.querySelector("[data-close-modal]"),
//     backdrop: document.querySelector("[data-backdrop]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);
//   // refs.backdrop.addEventListener("click", logBackdropClick);
//   // refs.backdrop.addEventListener("click", closeModalBth);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open");
//     // document.body.classList.toggle("modal-btn-close");
//     refs.backdrop.classList.toggle("is-hidden");
//   }
// })();

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);
//   // refs.backdrop.addEventListener("click", closeModalBth);

function onOpenModal() {
  window.addEventListener("keydown", onEscKeyPress);
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}
