(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-modal]"),
    backdrop: document.querySelector("[data-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  // refs.backdrop.addEventListener("click", logBackdropClick);
  // refs.backdrop.addEventListener("click", closeModalBth);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    // document.body.classList.toggle("modal-btn-close");
    refs.backdrop.classList.toggle("is-hidden");
  }
})();
