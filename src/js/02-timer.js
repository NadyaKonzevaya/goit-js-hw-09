// // Задание 2 - таймер обратного отсчета

// // +1. Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты.
// // Такой таймер может использоваться в блогах и интернет - магазинах,
// // страницах регистрации событий, во время технического обслуживания и т.д.
// // Посмотри демо видео работы таймера.

// // Элементы интефрейса
// // В HTML есть готовая разметка таймера, поля выбора конечной даты и кнопки,
// // при клике по которой таймер должен запускаться.
// // 2. Добавь минимальное оформление элементов интерфейса.

// // <input type="text" id="datetime-picker" />
// // <button type="button" data-start>Start</button>

// // <div class="timer">
// //   <div class="field">
// //     <span class="value" data-days>00</span>
// //     <span class="label">Days</span>
// //   </div>
// //   <div class="field">
// //     <span class="value" data-hours>00</span>
// //     <span class="label">Hours</span>
// //   </div>
// //   <div class="field">
// //     <span class="value" data-minutes>00</span>
// //     <span class="label">Minutes</span>
// //   </div>
// //   <div class="field">
// //     <span class="value" data-seconds>00</span>
// //     <span class="label">Seconds</span>
// //   </div>
// // </div>

// // Библиотека flatpickr
// // +3. Используй библиотеку flatpickr для того чтобы позволить
// // пользователю кроссбраузерно выбрать конечную дату и время в одном элементе интерфейса.
// // Для того чтобы подключить CSS код библиотеки в проект,
// //  необходимо добавить еще один импорт, кроме того который описан в документации.

// // // Описан в документации
// // import flatpickr from 'flatpickr';
// // // Дополнительный импорт стилей
// // import 'flatpickr/dist/flatpickr.min.css';
// // Библиотека ожидает что её инициализируют на элементе input[type="text"],
// //  поэтому мы добавили в HTML документ поле input#datetime - picker.

// // <input type="text" id="datetime-picker" />
// // Вторым аргументом функции flatpickr(selector, options) можно передать необязательный объект параметров.
// // Мы подготовили для тебя объект который нужен для выполнения задания.
// // Разберись за что отвечает каждое свойство в документации «Options» и используй его в своем коде.

// // const options = {
// //   enableTime: true,
// //   time_24hr: true,
// //   defaultDate: new Date(),
// //   minuteIncrement: 1,
// //   onClose(selectedDates) {
// //     console.log(selectedDates[0]);
// //   },
// // };

// // +3.Выбор даты
// // Метод onClose() из обьекта параметров вызывается каждый раз
// // при закрытии элемента интерфейса который создает flatpickr.
// // Именно в нём стоит обрабатывать дату выбранную пользователем.
// // Параметр selectedDates это массив выбранных дат, поэтому мы берем первый элемент.

// // +4. Если пользователь выбрал дату в прошлом, покажи window.alert() с текстом "Please choose a date in the future".
// // +5. Если пользователь выбрал валидную дату (в будущем), кнопка «Start» становится активной.
// // Кнопка «Start» должа быть не активна до тех пор, пока пользователь не выбрал дату в будущем.
// // +6. При нажатии на кнопку «Start» начинается отсчет времени до выбранной даты с момента нажатия.
// // Отсчет времени
// // +7. При нажатии на кнопку «Start» скрипт должен вычислять раз в секунду сколько времени осталось до указанной даты и обновлять интерфейс таймера, показывая четыре цифры: дни, часы, минуты и секунды в формате xx:xx:xx:xx.

// // Количество дней может состоять из более чем двух цифр.
// // +8. Таймер должен останавливаться когда дошел до конечной даты, то есть 00:00:00:00.
// // 💡 Не будем усложнять. Если таймер запущен, для того чтобы выбрать новую дату
// // и перезапустить его - необходимо перезагрузить страницу.

// // +9. Для подсчета значений используй готовую функцию convertMs,
// // где ms - разница между конечной и текущей датой в миллисекундах.

// // function convertMs(ms) {
// //   // Number of milliseconds per unit of time
// //   const second = 1000;
// //   const minute = second * 60;
// //   const hour = minute * 60;
// //   const day = hour * 24;

// //   // Remaining days
// //   const days = Math.floor(ms / day);
// //   // Remaining hours
// //   const hours = Math.floor((ms % day) / hour);
// //   // Remaining minutes
// //   const minutes = Math.floor(((ms % day) % hour) / minute);
// //   // Remaining seconds
// //   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

// //   return { days, hours, minutes, seconds };
// // }

// // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// // Форматирование времени
// // Функция convertMs() возвращает объект с рассчитанным оставшимся временем до конечной даты.
//  Обрати внимание, что она не форматирует результат.
// +10. То есть, если осталось 4 минуты или любой другой составляющей времени, 
// то функция вернет 4, а не 04.В интерфейсе таймера необходимо добавлять 0 
// если в числе меньше двух символов.Напиши функцию addLeadingZero(value), 
// которая использует метод метод padStart() и перед отрисовкой интефрейса форматируй значение.

// // 11. Библиотека уведомлений
// // ⚠️ Следующий функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// // Для отображения уведомлений пользователю вместо window.alert() используй библиотеку notiflix.

// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let userSelectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const delta = selectedDates[0].getTime() - Date.now();
        userSelectedDate = selectedDates[0];
        if (delta <= 0) {
            refs.startBtn.setAttribute("disabled", true);
            Notiflix.Notify.warning("Please choose a date in the future");
        } else {
            refs.startBtn.removeAttribute("disabled");
            updateTimePanels(convertMs(delta));
        }
    },
};

flatpickr("#datetime-picker", options);

const refs = {
    startBtn: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}

class Timer {
    constructor({ onTick }) {
        this. isActive = false;
        this.intervalId = null;
        this.onTick = onTick;
    }
        
    start() {
        if (!this.isActive) {
            this.isActive = true;
            this.intervalId = setInterval(() => {
                const currentTime = Date.now();
                const targetTimeInMs = userSelectedDate.getTime();
                const deltaTime = targetTimeInMs - currentTime;
                if (deltaTime <= 0) {
                    clearInterval(this.intervalId);
                } else {
                    this.onTick(convertMs(deltaTime));
                    console.log(deltaTime)
                }
            }, 1000);
        }
    }
}

const timer = new Timer({onTick: updateTimePanels});
refs.startBtn.addEventListener("click", timer.start.bind(timer));
refs.startBtn.setAttribute("disabled", true);

// function updateTimePanels({ days, hours, minutes, seconds }) {
//     refs.days.textContent = days;
//     refs.hours.textContent = hours;
//     refs.minutes.textContent = minutes;
//     refs.seconds.textContent = seconds;
// }
function updateTimePanels(time) {
    console.log(time);
    for (const e in time) {
        refs[e].textContent = addLeadingZero(time[e]);
    };
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return String(value).padStart(2,"0");
};





// =============================================================================================





// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// // import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//     button: document.querySelector('button[data-start]'),
//     days: document.querySelector('[data-days]'),
//     hours: document.querySelector('[data-hours]'),
//     minutes: document.querySelector('[data-minutes]'),
//     seconds: document.querySelector('[data-seconds]')
// };

// refs.button.addEventListener('click', onBtnClick);

// refs.button.setAttribute('disabled', 'true');
// let isTimerRuning = false;
// let timerId = null;
// let userSelectedDate = null;

// // options for instance (date-view):
// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {   
    
//         if (selectedDates[0].getTime() <= Date.now()){
//             window.alert('Please choose a date in the future');  
//             return; 
//         };
        
//         userSelectedDate = selectedDates[0];
//         refs.button.removeAttribute('disabled');
//     },
//     onOpen(){
        
//         clearInterval(timerId);
//         isTimerRuning = false;
//         refs.button.setAttribute('disabled', 'true');

//         refs.days.textContent = '00';
//         refs.hours.textContent = '00';
//         refs.minutes.textContent = '00';
//         refs.seconds.textContent = '00';
//     }
// };

// console.log(userSelectedDate);

// //makes instance for date-view: 
// flatpickr('#datetime-picker', options);

// //Hendle Button Click:
// function onBtnClick(){
//     if(isTimerRuning) return;
    
//     isTimerRuning = true;

//     timerId = setInterval(() => {
//         let currentDate = Date.now();
//         let convertUserSelectedDate = userSelectedDate.getTime();
//         let diference = convertUserSelectedDate - currentDate;

//         refs.days.textContent = convertMs(diference).days;
//         refs.hours.textContent = convertMs(diference).hours;
//         refs.minutes.textContent = convertMs(diference).minutes;
//         refs.seconds.textContent = convertMs(diference).seconds;
        
//     }, 1000);
// };

// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     // Remaining days
//     const days = addLeadingZero(Math.floor(ms / day));
//     // Remaining hours
//     const hours = addLeadingZero(Math.floor((ms % day) / hour));
//     // Remaining minutes
//     const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//     // Remaining seconds
//     const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//     return { days, hours, minutes, seconds };
// };

// function addLeadingZero(value){
//     return String(value).padStart(2, '0');
// };

// //Shown(log) messsage view options:
// // Notify.init({
// //     width: '280px',
// //     position: 'center-top',
// //     distance: '25px',
// //     timeout: 3000,
// //     cssAnimationStyle: 'zoom',
// //     warning: {
// //         background: 'rgba(255, 72, 0, 0.945)',
// //         textColor: '#fff',
// //         notiflixIconColor: 'rgba(0,0,0,0.4)',
// //     },
// // });



