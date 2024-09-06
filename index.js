const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  const name = document.getElementById("name").value;
  const login = document.getElementById("login").value;
  const age = document.getElementById("age").value;
  let errorMessages = [];

  !validateName(name)
    ? errorMessages.push(
        "Имя пользователя должно содержать от 1 до 50 символов"
      )
    : null;

  !validateName(age)
    ? errorMessages.push("Возраст содержит только цифры и от 1 до 3 цифр.")
    : null;

  !validateLogin(login)
    ? errorMessages.push(
        "Логин пользователя содержит от 4 до 20 символов и включает только буквы и цифры."
      )
    : null;

  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
    event.preventDefault();
  }
});

function validateLogin(login) {
  const checkLogin = /^[a-zA-Z0-9]{4,20}$/;
  return checkLogin.test(login);
}

function validateAge(age) {
  let checkAge = /^[0-9]{1,3}$/;
  return checkAge.test(age);
}

function validateName(name) {
  return name.length >= 1 && name.length <= 50;
}
