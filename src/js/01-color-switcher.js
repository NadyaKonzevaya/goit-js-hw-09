// Задание 1 - переключатель цветов
// В HTML есть кнопки «Start» и «Stop».

{/* <button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>

// +1. Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет
//  цвет фона <body> на случайное значение используя инлайн стиль. 
// +2. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.


⚠️ +3. Учти, на кнопку «Start» можно нажать бесконечное количество раз. 
// Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

+4. Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} */}


const refs = {
    startBtn: document.querySelector("[data-start]"),
    stopBtn: document.querySelector(["[data-stop]"]),
}

let timerId = null;
refs.stopBtn.setAttribute("disabled", true);

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {
    changeColor()
    timerId = setInterval(() => {
        changeColor()
    }, 1000);
    
    refs.startBtn.setAttribute("disabled", true);
    refs.stopBtn.removeAttribute("disabled");
}

function onStopBtnClick() {
    clearInterval(timerId);
    refs.startBtn.removeAttribute("disabled");
}

function changeColor() {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;

}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}