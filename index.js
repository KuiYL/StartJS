//TODO ЗАДАНИЕ №1

let input1 = prompt("Введите два числа через запятую:");
let numbers1 = input1.split(",").map((num) => parseInt(num.trim));
let sum1 = numbers1.reduce((a, b) => a + b, 0);

if (sum1 % 2 === 0) {
  console.log("Четная задержка");
}

setTimeout(() => {
  console.log("Таймер сработал");
}, sum1 * 1000);

//TODO ЗАДАНИЕ №2

let currentHour = new Date().getHours();

if (currentHour < 12) {
  setTimeout(() => {
    console.log("Доброе утро!");
  }, 5000);
} else {
  setTimeout(() => {
    console.log("Добрый день!");
  }, 10000);
}

//TODO ЗАДАНИЕ №3

let currentDay = new Date().getDay();

if (currentDay === 0 || currentDay == 6) {
  setTimeout(() => {
    console.log("Сегодня выходной!");
  }, 3000);
} else {
  setTimeout(() => {
    console.log("Рабочий день");
  }, 7000);
}

//TODO ЗАДАНИЕ №4

let input2 = prompt("Введите ваше имя или стоп:");

if (input2.toLowerCase() === "стоп") {
  setTimeout(() => {
    console.log("Таймер отменен");
  }, 1000);
} else {
  setTimeout(() => {
    console.log("Привет, ${input2}!");
  }, 2000);
}

//TODO ЗАДАНИЕ №5

let randomNumber = Math.floor(Math.random * 10) + 1;

if (randomNumber % 2 === 0) {
  console.log("Четное время");
}

setTimeout(() => {
  console.log("Таймер сработал!");
}, randomNumber * 1000);

//TODO ЗАДАНИЕ №6

let input3 = parseInt(prompt("Введите число:"));

if (input3 > 10) {
  console.log("Слишком большая задержка");
} else {
  setTimeout(() => {
    console.log("Таймер сработал!");
  }, input3 * 1000);
}

//TODO ЗАДАНИЕ №7

let currentMonth = new Date().getMonth();

if (currentMonth >= 8 && currentMonth <= 10) {
  setTimeout(() => {
    console.log("Сезон осени!");
  }, 4000);
} else {
  setTimeout(() => {
    console.log("Другой сезон");
  }, 6000);
}

//TODO ЗАДАНИЕ №8

let input4 = prompt("Введите символ");

if (input4.toLowerCase() === "y") {
  setTimeout(() => {
    console.log("Таймер сработал!");
  }, 3000);
} else {
  setTimeout(() => {
    console.log("Таймер отменен");
  }, 2000);
}

//TODO ЗАДАНИЕ №9

let currentYear = new Date().getFullYear();

if (
  (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
  currentYear % 400 === 0
) {
  setTimeout(() => {
    console.log("Високосный год!");
  }, 3000);
} else {
  setTimeout(() => {
    console.log("Не високосный год");
  }, 7000);
}

//TODO ЗАДАНИЕ №10

let input5 = prompt("Введите число и символ через пробел:").split(" ");
let number5 = parseInt(input5[0]);
let symbol5 = input5[1];

if (symbol5 === "x") {
  console.log("Символ 'x' обнаружен");
}

setTimeout(() => {
  console.log("Таймер сработал!");
}, number5 * 1000);
