window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".arrow");
  scroll.classList.toggle("active", window.scrollY > 200);
});

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
