import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import Notiflix from 'notiflix';

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl= document.querySelector('[data-days]');
const hoursEl= document.querySelector('[data-hours]');
const minutesEl= document.querySelector('[data-minutes]');
const secondsEl= document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', 'disabled');
startBtn.addEventListener('click', countDown);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectData) {
    console.log(selectData[0]);
  },
  onChange(){
    let pointOfStart= options.defaultDate.getTime();
    const enterData = fp.latestSelectedDateObj.getTime();
    if(enterData < pointOfStart ){
      Notiflix.Notify.failure('Please choose a date in the future')
      return
    }
    startBtn.removeAttribute('disabled');
     }
};

const fp = flatpickr("input", options)
let timerId = null;
 function countDown(){
   timerId = setInterval(convertMs, 1000);
   console.log(timerId)
}

 function counterTimer(){
  const dateNow = new Date();
  const counter = fp.latestSelectedDateObj.getTime() - dateNow.getTime();
  return counter
 }

 function convertMs() {
  let counter = counterTimer()
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(counter / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((counter % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((counter % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((counter % day) % hour) % minute) / second));
  
  daysEl.textContent = `${days}`
  hoursEl.textContent = `${hours}`
  minutesEl.textContent = `${minutes}`
  secondsEl.textContent = `${seconds}`
 
  if(daysEl.textContent === '00' && hoursEl.textContent === '00' && minutesEl.textContent === '00' && secondsEl.textContent === '00'){
    clearInterval(timerId)
    console.log('stop')
  }
}
function addLeadingZero(value){
  return String(value).padStart(2, '0')};
  
