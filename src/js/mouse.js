const hover = document.querySelector(".js-hover");

hover.addEventListener("mouseenter", onMouseEnter);
hover.addEventListener("mouseleave", onMouseLeave);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add("hover--active");
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove("hover--active");
}
