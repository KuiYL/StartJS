let div = document.getElementById("square");
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

document.addEventListener("keydown", (event) => {
  let position = div.getBoundingClientRect();
  let step = 10;

  div.style.position = "absolute";
  switch (event.code) {
    case "ArrowUp":
      div.style.top = position.top - step + "px";
      break;
    case "ArrowDown":
      div.style.top = position.top + step + "px";
      break;
    case "ArrowLeft":
      div.style.left = position.left - step + "px";
      break;
    case "ArrowRight":
      div.style.left = position.left + step + "px";
      break;
  }
});


