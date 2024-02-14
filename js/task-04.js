// let initialValue = 0;

// let value = document.getElementById("value");
// value.innerText = initialValue;

// let incBtn = document.querySelector('[data-action="increment"]');
// let decBtn = document.querySelector('[data-action="decrement"]');

// incBtn.onclick = () => {
//   initialValue += 1;
//   value.innerText = initialValue;
// };
// decBtn.onclick = () => {
//   initialValue -= 1;
//   value.innerText = initialValue;
// };

const counter = document.getElementById("counter");
const decrementBtn = counter.querySelector("[data-action='decrement']");
const incrementBtn = counter.querySelector("[data-action='increment']");
const countervalueSpan = counter.querySelector("#value");

let counterValue = 0;
const updateCounter = () => {
  countervalueSpan.textContent = counterValue;
};

decrementBtn.addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

incrementBtn.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});