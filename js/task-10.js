const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const containerEl = document.querySelector('#boxes');
const amountEl = document.querySelector('input[type="number"]')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxSize = Array.from({ length: amount }, (_, idx) => 30 + idx * 10);
  // console.log(boxSize)
  const boxes = boxSize.map((size) => {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    return div;
  });
  containerEl.append(...boxes);
};

function destroyBoxes() {
  containerEl.innerHTML = '';
}


createBtnEl.addEventListener('click', () => {
  const amount = Number(amountEl.value)
  createBoxes(amount)
  // console.log(amount)
});

destroyBtnEl.addEventListener('click', destroyBoxes);




















