// Добавили тротал чщоб функция визивалась через кожну 1 секунду
import throttle from "lodash.throttle";

// const STORAGE_KEY = "feedback-msg";

const formData = {};

const STORAGE_KEY_NAME = "feedback-msg-name";
const STORAGE_KEY_TEL = "feedback-msg-tal";
const STORAGE_KEY_EMAIL = "feedback-msg-email";
const STORAGE_KEY_DATA = "feedback-msg-data";

const refs = {
  form: document.querySelector(".form-2"),
  inputName: document.querySelector(".js__input-name"),
  inputTel: document.querySelector(".js__input-tel"),
  inputEmail: document.querySelector(".js__input-email"),
  inputData: document.querySelector(".js__input-date"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.inputName.addEventListener("input", throttle(onFormName, 1000));
refs.inputTel.addEventListener("input", throttle(onFormTel, 1000));
refs.inputEmail.addEventListener("input", throttle(onFormEmail, 1000));
refs.inputData.addEventListener("input", throttle(onFormData, 1000));

// refs.form.addEventListener("input", (e) => {
//   formData[e.target.name] = e.target.value;
//   JSON.stringify(formData);
// });

populateText();

function onFormSubmit(e) {
  // Запрещаємо перезаргузку при відправці форми
  e.preventDefault();
  // Сбрасуємо всі значення введені в форму при натискані кнопки відправити
  e.currentTarget.reset();
  // Очичаэмо локалсторыдж

  // localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_KEY_NAME);
  localStorage.removeItem(STORAGE_KEY_TEL);
  localStorage.removeItem(STORAGE_KEY_EMAIL);
  localStorage.removeItem(STORAGE_KEY_DATA);
}

function onFormName(e) {
  // Получаємо значення кожного инпута
  const message__name = e.target.value;
  // Записуємо в локал сторидж значення инрута
  localStorage.setItem(STORAGE_KEY, message);
}

function onFormTel(e) {
  // Получаємо значення кожного инпута
  const message__tal = e.target.value;
  // Записуємо в локал сторидж значення инрута
  localStorage.setItem(STORAGE_KEY_TEL, message__tal);
}

function onFormEmail(e) {
  // Получаємо значення кожного инпута
  const message__email = e.target.value;
  // Записуємо в локал сторидж значення инрута
  localStorage.setItem(STORAGE_KEY_EMAIL, message__email);
}

function onFormData(e) {
  // Получаємо значення кожного инпута
  const message__date = e.target.value;
  // Записуємо в локал сторидж значення инрута
  localStorage.setItem(STORAGE_KEY_DATA, message__date);
}

function populateText() {
  // const saveMessage = localStorage.getItem(STORAGE_KEY);
  const saveMessage__name = localStorage.getItem(STORAGE_KEY_NAME);
  const saveMessage__tel = localStorage.getItem(STORAGE_KEY_TEL);
  const saveMessage__email = localStorage.getItem(STORAGE_KEY_EMAIL);
  const saveMessage__data = localStorage.getItem(STORAGE_KEY_DATA);

  if (
    // saveMessage
    saveMessage__name ||
    saveMessage__tel ||
    saveMessage__email ||
    saveMessage__data
  ) {
    // refs.inputName.value = saveMessage;
    refs.inputName.value = saveMessage__name;
    refs.inputTel.value = saveMessage__tel;
    refs.inputEmail.value = saveMessage__email;
    refs.inputData.value = saveMessage__data;
  }
}
