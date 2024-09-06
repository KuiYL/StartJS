//TODO Создайте кнопку на странице. При нажатии на кнопку должен выводиться текст "Hello, World!".
let buttonHello = document.getElementById("buttonHello");
let helloText = document.getElementById("helloText");

buttonHello.addEventListener("click", () => {
  helloText.textContent = helloText.textContent == "" ? "Hello World" : "";
});

//TODO Создайте поле ввода на странице. При нажатии на клавишу "Enter" должен выводиться текст, введенный в поле ввода.
let inputTextEnter = document.getElementById("inputTextEnter");
let textEnter = document.getElementById("textEnter");

inputTextEnter.addEventListener("keydown", (event) => {
  textEnter.textContent =
    event.key == "Enter" ? inputTextEnter.value : textEnter.textContent;
});
//TODO Создайте две кнопки на странице. При нажатии на первую кнопку должен выводиться текст "Нажата первая кнопка", а при нажатии на вторую кнопку должен выводиться текст "Нажата вторая кнопка".
let textButtons = document.getElementById("textButtons");
let buttonTextOne = document.getElementById("buttonTextOne");
let buttonTextTwo = document.getElementById("buttonTextTwo");

buttonTextOne.addEventListener("click", () => {
  textButtons.textContent = "Нажата первая кнопка";
});

buttonTextTwo.addEventListener("click", () => {
  textButtons.textContent = "Нажата вторая кнопка";
});
//TODO Создайте блок на странице. При наведении мыши на блок должен меняться его цвет на красный.
let backColor = document.getElementById("backColor");
backColor.addEventListener("mousemove", () => {
  backColor.style.backgroundColor = "red";
});
backColor.addEventListener("mouseout", () => {
  backColor.style.backgroundColor = "brown";
});
//TODO Создайте две кнопки на странице. При нажатии на первую кнопку должны появиться подробности, а при нажатии на вторую кнопку должны скрыться подробности.
let descript = document.getElementById("descript");
let buttonDescOne = document.getElementById("buttonDescOne");
let buttonDescTwo = document.getElementById("buttonDescTwo");

buttonDescOne.addEventListener("click", () => {
  descript.textContent = "Подробности";
});

buttonDescTwo.addEventListener("click", () => {
  descript.textContent = "";
});
//TODO Создайте поле ввода на странице. При фокусировке на поле ввода должен меняться его цвет на желтый.
let inputFocus = document.getElementById("inputFocus");
inputFocus.addEventListener("focusin", () => {
  inputFocus.style.backgroundColor = "yellow";
});
inputFocus.addEventListener("focusout", () => {
  inputFocus.style.backgroundColor = "white";
});
//TODO Создайте кнопку на странице. При двойном клике на кнопку должен выводиться текст "Кнопка была дважды нажата".
let inputDoubleClick = document.getElementById("inputDoubleClick");
let buttonDoubleClick = document.getElementById("buttonDoubleClick");

buttonDoubleClick.addEventListener("dblclick", () => {
  inputDoubleClick.textContent = "Кнопка была дважды нажата";
});

//TODO cоздайте ссылку на странице. При наведении мыши на ссылку должен меняться ее цвет на зеленый.
let linkColor = document.getElementById("linkColor");
linkColor.addEventListener("mousemove", () => {
  linkColor.style.color = "green";
});
linkColor.addEventListener("mouseout", () => {
  linkColor.style.color = "blue";
});

//TODO Создайте две кнопки на странице. При нажатии на одну кнопку должен увеличиваться ее размер на вторую уменьшаться.
let buttonAnimTwo = document.getElementById("buttonAnimTwo");
let buttonAnimOne = document.getElementById("buttonAnimOne");

let btn_scale1 = 1;
let btn_scale2 = 1;

buttonAnimOne.addEventListener("click", () => {
  btn_scale1+=0.2;
  buttonAnimOne.style.scale = btn_scale1;
});
buttonAnimTwo.addEventListener("click", () => {
  btn_scale2-=0.2;
  buttonAnimTwo.style.scale = btn_scale2;
});