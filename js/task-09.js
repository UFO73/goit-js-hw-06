function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const text = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', onClick);

function onClick(){
  bodyColor.style.backgroundColor = getRandomHexColor();
  text.textContent = getRandomHexColor();
};
