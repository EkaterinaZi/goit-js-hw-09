import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const amountEl = document.querySelector('[name="amount"]');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');

formEl.addEventListener('submit', onSubmitForm)

function onSubmitForm(evt){
evt.preventDefault();

const elements = evt.currentTarget.elements;
const stepNumber = Number(elements.step.value);
const delayNumber = Number(elements.delay.value);
const amountNumber = Number(elements.amount.value);
let delay = 0;
let position = 0;
for(let i = 0; i < amountNumber; i ++){
  position += 1;
  delay = delayNumber + stepNumber * i;

  createPromise(position, delay)
 .then(ok => Notiflix.Notify.success(ok))
 .catch(err => Notiflix.Notify.failure(err))
}
evt.currentTarget.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((ok, err) =>{
    setTimeout(() => {
    if (shouldResolve) {
      // Fulfill
      ok(`✅ Fulfilled promise ${position} in ${delay}ms`)
    } else {
      // Reject
      err(`❌ Rejected promise ${position} in ${delay}ms`)
    }}, delay)
  })
 
}
