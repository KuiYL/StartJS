//Задание 1
function getNumbers(numOne, numTwo) {
  return numOne * numTwo;
}

let numOne = prompt("Введите первое число", 0);
let numTwo = prompt("Введите второе число", 0);

alert("Результат умножения ваших чисел: " + getNumbers(numOne, numTwo));

//Задание 2

function getDataName(firstName, lastName, age) {
  return (
    "Привет " + firstName + " " + lastName + " с возрастом " + age + " лет"
  );
}

let firstName = prompt("Введите имя", "Иван");
let lastName = prompt("Введите фамилию", "Иванов");
let age = prompt("Введите возраст", 17);

alert(getDataName(firstName, lastName, age));

//Задание 3

function getGenderInfo(gender) {
  return gender == "M"
    ? "Ваш пол мужской"
    : gender == "F"
    ? "Ваш пол женский"
    : "Ваш пол не определен";
}

let gender = prompt("Введите ваш пол (M/F)", "M");

alert(getGenderInfo(gender));

//Задание 4

function getWeekday(number) {
  switch (parseInt(number)) {
    case 1:
      return "Понедельник";
    case 2:
      return "Вторник";
    case 3:
      return "Среда";
    case 4:
      return "Четверг";
    case 5:
      return "Пятница";
    case 6:
      return "Суббота";
    case 7:
      return "Воскресенье";
    default:
      return "Вы неправильно ввели число";
  }
}

let weekday = prompt("Введите число от 1 до 7", 1);
alert(getWeekday(weekday));

//Задание 5

function printDataAge(age) {
  let ageDescript = "ребенок";
  if (age > 0 && age < 18) {
    ageDescript = "ребенок";
  } else if (age > 17 && age < 31) {
    ageDescript = "молодой";
  } else if (age > 30 && age < 56) {
    ageDescript = "зрелый";
  } else {
    ageDescript = "старый";
  }
  return ageDescript;
}

for (let index = 1; index <= 100; index++) {
  printDataAge(index);
  console.log(index + " – " + printDataAge(index));
}

//Задание 6

function describePerson(firstName, age) {
  let describe = printDataAge(age);
  return firstName + " имеет возраст" + age + " лет и он " + describe;
}

firstName = prompt("Введите имя", "Иван");
age = prompt("Введите возраст", 17);

alert(describePerson(firstName, age));

//Задание 7

function printHello() {
  alert("Привет Мир!");
}

//Задание 8
let input = document.getElementById("myInput");
let button = document.getElementById("myButton");

button.addEventListener("click", function () {
  input.value = "test@email.ru";
});

//Задание 9
let inputEmptyOrNot = document.getElementById("inputEmptyOrNot");
let buttonEmptyOrNot = document.getElementById("buttonEmptyOrNot");

buttonEmptyOrNot.addEventListener("click", function () {
  alert(
    inputEmptyOrNot.value === ""
      ? "Вы ничего не ввели в поле"
      : "Вы ввели '" + inputEmptyOrNot.value + "'"
  );
});

//Задание 10
function disableInput() {
  document.getElementById("inputBlock").disabled = true;
}

function enableInput() {
  document.getElementById("inputBlock").disabled = false;
}

//Задание 11
function toggleSquare() {
  let square = document.getElementById("square");
  const button = event.target;

  if (square.style.display === "none") {
    square.style.display = "block";
    button.textContent = "Скрыть квадрат";
  } else {
    square.style.display = "none";
    button.textContent = "Показать квадрат";
  }
}

//Задание 12
let square = document.getElementById("square");
square.onmouseover = function (event) {
  event.target.style.backgroundColor = "green";
};

square.onmouseout = function (event) {
  event.target.style.backgroundColor = "red";
};
