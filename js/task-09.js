function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const nameColorEl = document.querySelector(".color");
const btnChangeColorEl = document.querySelector(".change-color");

btnChangeColorEl.addEventListener('click', (event) => {
  let color = getRandomHexColor();
  
  bodyEl.style.backgroundColor = color;
  nameColorEl.textContent = color;
});