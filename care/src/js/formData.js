// отримати доступт форми
const form = document.querySelector(".js-form-data");

// при натисненні кнопки сабміт отримати данні введенні користувачем
form.addEventListener("submit", onFormSubmit);

// функція яка збирає всієї форми
function onFormSubmit(event) {
  // отменяем перезаргузку страницы при отправке формы
  event.preventDefault();
  event.currentTarget.reset();

  // собираем все знаяения всех полей которые у нас есть
  // currentTarget - цу ссилка на всю форму
  const formData = new FormData(event.currentTarget);

  // формдата використовується для збору та відправки
  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", value);
    // console.log("onFormSubmit -> value", value);
  });

  // const formElements = event.currentTarget.elements;

  // const name = formElements.name.value;
  // const tel = formElements.tel.value;
  // const email = formElements.email.value;
  // const date = formElements.date.value;

  // const formData2 = {
  //   name,
  //   tel,
  //   email,
  //   date,
  // };

  // console.log(formData2)
}
