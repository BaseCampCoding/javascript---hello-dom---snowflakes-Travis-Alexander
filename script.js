const MIN_SIZE = 10;
const MAX_SIZE = 20;
const MIN_DURATION = 2000;
const MAX_DURATION = 5000;

const snowflakesContainer = document.getElementById("snowflakes-container");
const snowVSrain = document.querySelector("#snow-vs-rain");
const quantity = document.querySelector("#quantity");
const snowColor = document.querySelector("#click-color");
const wind = document.querySelector("#wind");
let quantityAmount = 200;



let quantityIncrease =  setInterval(() => createSnowflake(), quantityAmount);


quantity.addEventListener("input", () => {
  switch (quantity.value){
    case "0":
      quantityAmount = 99999999999;
      break;
    case "1":
      quantityAmount = 200;
      break;
    case "2":
      quantityAmount = 100;
      break;
    case "3":
      quantityAmount = 65;
      break;
    case "4":
      quantityAmount = 50;
      break;
    }
    clearInterval(quantityIncrease)
    quantityIncrease =  setInterval(() => createSnowflake(), quantityAmount);

  }
)

function randint(lo, hi) {
  return Math.random() * (hi - lo) + lo;
}

function randomIcon() {
  if (Math.random() > snowVSrain.value) {
    return "fa-snowflake";
  } else {
    return "fa-tint";
  }
}

snowColor.addEventListener("click", () => {
  let color = color.value
})
function createSnowflake() {
  const snowFlake = document.createElement("i");

  snowFlake.classList.add("fas", randomIcon());
  snowFlake.style.left = randint(0, 100) + "%";
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = randint(MIN_SIZE, MAX_SIZE) + "px";
  snowFlake.style.color = snowColor.value;
 

  snowflakesContainer.appendChild(snowFlake);
  

  snowFlake
    .animate(
      { transform: `translate(${wind.value}vw, 100vh)` },
      { duration: randint(MIN_DURATION, MAX_DURATION) }
    )
    .finished.then(() => snowFlake.remove());
}
