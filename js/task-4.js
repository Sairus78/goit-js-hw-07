// Знаходимо форму в DOM
const loginForm = document.querySelector(".login-form");

// Додаємо слухач події submit до форми
loginForm.addEventListener("submit", (event) => {
  // Запобігаємо перезавантаженню сторінки при сабміті форми
  event.preventDefault();

  // Отримуємо елементи форми
  const { email, password } = loginForm.elements;

  // Очищаємо значення від пробілів по краях
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевіряємо, чи всі поля заповнені
  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  // Створюємо об'єкт з даними форми
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо об'єкт з даними в консоль
  console.log(formData);

  // Очищаємо форму після відправки
  loginForm.reset();
});
