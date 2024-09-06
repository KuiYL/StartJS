// let div = document.getElementById("square");
// let result = document.getElementById("result");
// div.addEventListener("dblclick", () => {
//   alert("div нажат");
// });

// document.body.addEventListener("mousemove", (event) => {
//   result.textContent = "Координаты мыши: " + event.clientX + " " + event.clientY;
// });

// div.addEventListener("mousemove", (event) => {
//   result.textContent = "Координаты мыши: " + event.clientX + " " + event.clientY;
// });

// div.addEventListener("mouseup", (event) => {
//   result.textContent = "МЫШЬ ОПУЩЕНА";
// });

// div.addEventListener("mousedown", (event) => {
//   result.textContent = "Мышь поднята";
// });

// document.addEventListener("contextmenu" , (event) => {
//   event.preventDefault();
//   alert("Контексное меню нажато")
// });

// let input1 = document.getElementById("input1");

// input1.addEventListener("focus", (event) => {
//   input1.value = "red";

//   console.log("фокус на первом input");
// });

// input2.addEventListener("blur", (event) => {
//   input1.value = "вы сьебались";
//   console.log("фокус пропал с первого input");
// });

// input1.addEventListener("keydown", (event) => {
// console.log("Нажата кнопка " + event.key);

// });

// input1.addEventListener("keyup", (event) => {
//   console.log("Отжата отжата " + event.key);

//   });

// input1.addEventListener("keydown", (event) => {
//   if (event.shiftKey && event.key == "F") {
//     console.log("Комбинация нажата.");
//   }
// });

// document.addEventListener("keydown", (event) => {
//   if (event.shiftKey && event.key == "F") {
//     console.log("Комбинация нажата.");
//   }
// });

// document.addEventListener("keydown", (event) => {
//   let position = div.getBoundingClientRect();
//   let step = 10;

//   div.style.position = "absolute";
//   switch (event.code) {
//     case "ArrowUp":
//       div.style.top = position.top - step + "px";
//       break;
//     case "ArrowDown":
//       div.style.top = position.top + step + "px";
//       break;
//     case "ArrowLeft":
//       div.style.left = position.left - step + "px";
//       break;
//     case "ArrowRight":
//       div.style.left = position.left + step + "px";
//       break;
//   }
// });

//TODO 3 LESSON

// let regex = /./; выбирает любой символ, кроме символа новой строки
// let regex = /^Hello/; поиск по началу строки 
// let regex = /world!$/; поиск конца строки
// let regex = /\d/; поиск цифры
// let regex = /\D/; поиск любого символа кроме цифр
// let regex = /\w/; поиск по цифрам, буквам или подчеркивание
// let regex = /\W/; поиск по символам, кроме цифр, букв или подчеркиваний
// let regex = /a*/ = * повторение 0 или более
// let regex = /a+/;

// let regex = /a?/ = ? повторение 0 или 1
// let regex = /a{3}/; проверяет количетсов повторений
// let regex = /a{2,4}/; {n,n} проверяет заданный промежуток
// let regex = /(abc)/; ищет совпадения, в любом месте строки
// let regex = /a|b/; ищет один из вариантов, в любом месте строки
// let regex = /[abc]/; ищет один из множества вариантов
// let regex = /[^abc]/ ищет любой символ кроме указанных
// let regex = /[a-zA-Z]/ поиск по символам в диапозоне 
// let regex = /[A-z]/ 
// let regex = /^\d+$/ проверка на число
// let regex = /^[a-zA-Z0-9]+$/
// let regex = /^[A-z0-9]+$/
// let regex = /^[!"#%:,.;((]+$/

// let regex = /\d+/

// console.log(regex.test("t32434rte:"));


// console.log('1'.match(regex));
// console.log('fffrce'.match(regex));


// let str = 'abc123'

// console.log(str.match(/\d+/));


// let str = 'abc123'

// console.log(str.replace(/\d+/, ''));


let str = 'abc123'

console.log(str.replace(/\d+/, ''));