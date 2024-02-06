const refs = {
  form: document.querySelector(".form-2"),
  inputName: document.querySelector(".js__input-name"),
  inputTel: document.querySelector(".js__input-tel"),
  inputEmail: document.querySelector(".js__input-email"),
  inputData: document.querySelector(".js__input-date"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.inputName.addEventListener("input", onFormInput);
refs.inputTel.addEventListener("input", onFormInput);
refs.inputEmail.addEventListener("input", onFormInput);
refs.inputData.addEventListener("input", onFormInput);

function onFormSubmit() {}

function onFormInput() {}
