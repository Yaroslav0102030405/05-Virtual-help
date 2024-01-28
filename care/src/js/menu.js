const openModal = document.querySelector(".js-open-modal");
const closeModal = document.querySelector(".js-close-modal");
const backdropJs = document.querySelector(".js-menu-backdrop");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const link4 = document.querySelector(".link4");
// const link = document.querySelector(".hav");

// const link = document.querySelector('a[href="#home"]');

// на єлементі вішаємо прослушиваніе подій + функії
openModal.addEventListener("click", onOpenModal);
closeModal.addEventListener("click", onCloseModal);
backdropJs.addEventListener("click", onBackdropClick);
link1.addEventListener("click", onBackdropClick);
link2.addEventListener("click", onBackdropClick);
link3.addEventListener("click", onBackdropClick);
link4.addEventListener("click", onBackdropClick);
// link.addEventListener("click", onBackdropClick);

// link.addEventListener("click", onLinkClick);

function onOpenModal() {
  document.body.classList.add("is-hidden");
  backdropJs.classList.toggle("is-open");
}

function onCloseModal() {
  backdropJs.classList.toggle("is-open");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

// function onLinkClick(event) {
//   if (event.currentTarget === event.target) {
//     onCloseModal();
//   }
// }

// function onEscKeyPress(event) {
//   if (event.code === "Escape") {
//     onCloseModal();
//   }
// }

// const menuBurger = document.querySelector(".mobile-menu");

// menuBurger.addEventListener("click", () => {
//   menuBurger.classList.toggle("open");
// });

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector("[data-menu-open]"),
//     closeMenuBtn: document.querySelector("[data-menu-close]"),
//     menu: document.querySelector("[data-menu]"),
//     body: document.querySelector("body"),
//   };

//   refs.openMenuBtn.addEventListener("click", toggleMenu);
//   refs.closeMenuBtn.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden");
//     refs.body.classList.toggle("no-scroll");
//   }
// })();

// function burgerMenu(selector) {
//   let menu = $(selector);
//   let button = menu.find(".burger-menu__button");
//   let links = menu.find(".burger-menu__link");
//   let overlay = menu.find(".burger-menu__overlay");

//   button.on("click", (e) => {
//     e.preventDefault();
//     toggleMenu();
//   });

//   links.on("click", () => toggleMenu());
//   overlay.on("click", () => toggleMenu());

//   function toggleMenu() {
//     menu.toggleClass("burger-menu__active");

//     if (menu.hasClass("burger-menu__active")) {
//       $("body").css("overflow", "hidden");
//     } else {
//       $("body").css("overflow", "visible");
//     }
//   }
// }

// burgerMenu(".burger-menu");

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     buttons: document.querySelectorAll("[data-button]"),
//     backdrop: document.querySelector(".backdrop"),
//     modalsContent: document.querySelectorAll("[data-modal]"),
//   };

//   refs.buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       const modalToOpenName = e.currentTarget.dataset.button;
//       openModal(modalToOpenName);
//     });
//   });

//   refs.closeModalBtn.addEventListener("click", closeModal);
//   refs.backdrop.addEventListener("click", onBackdropClick);

//   function openModal(modalName) {
//     refs.modalsContent.forEach((modalContent) => {
//       if (modalName === modalContent.dataset.modal) {
//         document.body.classList.toggle("modal-open");
//         modalContent.classList.toggle("is-hidden");
//         refs.backdrop.classList.toggle("is-hidden");
//       }
//       document.addEventListener("keydown", closeModalByEscape);
//     });
//   }

//   function closeModal() {
//     document.body.classList.toggle("modal-open");
//     refs.backdrop.classList.toggle("is-hidden");
//     refs.modalsContent.forEach((el) => {
//       if (!el.classList.contains("is-hidden")) {
//         el.classList?.toggle("is-hidden");
//       }
//       document.removeEventListener("keydown", closeModalByEscape);
//     });
//   }

//   function onBackdropClick(e) {
//     const isBackdrop = e.currentTarget === e.target;
//     if (isBackdrop) {
//       closeModal();
//     }
//   }

//   function closeModalByEscape(e) {
//     if (e.code === "Escape") {
//       closeModal();
//     }
//   }
// })();
