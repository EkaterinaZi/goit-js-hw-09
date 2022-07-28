function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const body = document.querySelector('body');
  const startBtn = document.querySelector('[data-start]');
  const stopBtn = document.querySelector('[data-stop]');
  let timerId = null;
  startBtn.addEventListener('click', startChangeColor);
  stopBtn.addEventListener('click', stopChangeColor);


function startChangeColor(){
    timerId = setInterval(changeColour, 1000);
    startBtn.setAttribute('disabled', 'disabled');
}

function changeColour(){
body.style.backgroundColor = getRandomHexColor();
}

function stopChangeColor(){
    clearInterval(timerId);
    startBtn.removeAttribute('disabled');
}