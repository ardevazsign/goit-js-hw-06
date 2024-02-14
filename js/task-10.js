

const input = document.querySelector("#controls input");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById("boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

function createBoxes(amount) {

  destroyBoxes();

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
     
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (!isNaN(amount)) {
    createBoxes(amount);
  }
  
});

destroyBtn.addEventListener('click', destroyBoxes);




 





