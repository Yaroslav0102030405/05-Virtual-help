// window.addEventListener("scroll", function () {
//   var scroll = document.querySelector(".arrow");
//   scroll.classList.toggle("active", window.scrollY > 200);
// });

// function scrollTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// Мій код
const arrowEl = document.querySelector(".arrow");
window.addEventListener("scroll", arrowScroll);

function arrowScroll() {
  if (window.scrollY > 300) {
    arrowEl.classList.add("active");
  } else {
    arrowEl.classList.remove("active");
  }
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
