
// Задание 3 - генератор промисов
// В HTML есть разметка формы, в поля которой пользователь будет вводить 
// первую задержку в миллисекундах, шаг увеличения задержки для каждого 
// промиса после первого и количество промисов которое необходимо создать.

{/* <form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form> */}

// +1. Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) 
// столько раз, сколько ввели в поле amount.
// 2.При каждом вызове передай ей номер создаваемого промиса(position) 
// и задержку учитывая введенную пользователем первую задержку(delay) и шаг(step).

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// 3. Дополни код функции createPromise так, чтобы она возвращала один промис, 
// который выполянется или отклоняется через delay времени.
// Значением промиса должен быть объект, в котором будут свойства position и delay 
// со значениями одноименных параметров.Используй начальный код функции для выбора того, 
// что нужно сделать с промисом - выполнить или отклонить.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// 4. Библиотека уведомлений
// Для отображения уведомлений пользователю вместо console.log() используй библиотеку notiflix.

import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector(".form"),
  delay: document.querySelector("[name='delay']"),
  step: document.querySelector("[name='step']"),
  amount: document.querySelector("[name='amount']"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const amountValue = event.currentTarget.elements.amount.value;
  const delayValue = Number(event.currentTarget.elements.delay.value);
  const stepValue = Number(event.currentTarget.elements.step.value);
  
  for (let i = 1; i <= amountValue; i += 1) {
    let delay = delayValue + (i - 1) * stepValue;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  refs.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      } 
    }, delay)
  })
}

