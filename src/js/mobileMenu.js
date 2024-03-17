const openModal = document.querySelector('.js-open-modal');
const closeModal = document.querySelector('.js-close-modal');
const backdropJs = document.querySelector('.js-menu-backdrop');

// Зробили клік на ссилку через деоегування подій
const link = document.querySelector('.header__right');

// const link1 = document.querySelector(".link1");
// const link2 = document.querySelector(".link2");
// const link3 = document.querySelector(".link3");
// const link4 = document.querySelector(".link4");
// const link = document.querySelector(".hav");

// const link = document.querySelector('a[href="#home"]');

// на єлементі вішаємо прослушиваніе подій + функії
openModal.addEventListener('click', onOpenModal);
closeModal.addEventListener('click', onCloseModal);
backdropJs.addEventListener('click', onBackdropClick);

link.addEventListener('click', onCloseLinkClick);

// link1.addEventListener("click", onBackdropClick);
// link2.addEventListener("click", onBackdropClick);
// link3.addEventListener("click", onBackdropClick);
// link4.addEventListener("click", onBackdropClick);
// link.addEventListener("click", onBackdropClick);

// link.addEventListener("click", onLinkClick);

function onOpenModal() {
  document.body.classList.add('is-hidden');
  backdropJs.classList.toggle('is-open');
  // openModal.classList.toggle("is-open");
  // openModal.style = "display: none";
  // backdropJs.style = "transform: translateX(0)";
}

function onCloseModal() {
  document.body.classList.remove('is-hidden');
  backdropJs.classList.toggle('is-open');
  // closeModal.classList.toggle("is-open");
  // openModal.style = "display: block";
  // backdropJs.style = "transform: translateX(-100%)";
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

// function onCloseLinkClick(event) {
//   if (event.target.nodeName === "IMG") {
//     onCloseModal();
//   }
// }

function onCloseLinkClick(event) {
  if (event.target.nodeName === 'A') {
    onCloseModal();
    // onOpenModal();
  }
  // Перевірити на який єлемент натиснули
  // console.log(event.target.nodeName);
}
