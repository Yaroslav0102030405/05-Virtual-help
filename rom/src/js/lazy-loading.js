const lazyImages = document.querySelector(".hero__image");

// lazyImages.forEach((image) => {
//   image.addEventListener("load", onImageLoaded);
// });

window.addEventListener("load", onImageLoaded, { once: true });

function onImageLoaded(event) {
  lazyImages.classList.add("left-animation");
}
