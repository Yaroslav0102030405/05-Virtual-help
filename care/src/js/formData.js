const form = document.querySelector(".js-form-data");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  // отменяем перезаргузку страницы при отправке формы
  event.preventDefault();

  //   собираем все знаяения всех полей которые у нас есть
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", value);
    // console.log("onFormSubmit -> value", value);
  });
}
