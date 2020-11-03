const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
     btnStart : document.querySelector('[data-action="start"]'),
     btnStop : document.querySelector('[data-action="stop"]'),
}

let timerId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.btnStart.addEventListener('click', () => { timerId = setInterval(changeBobyColor, 2500) });

refs.btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
});

function changeBobyColor() {
      document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.btnStart.disabled = true;
}
