const MIN_SIZE = 10;
const MAX_SIZE = 20;
const MIN_DURATION = 2000;
const MAX_DURATION = 5000;

const snowflakesContainer = document.getElementById("snowflakes-container");
const snowVSrain = document.querySelector("#snow-vs-rain");
const quantity = document.querySelector("#quantity");
const snowColor = document.querySelector("#click-color");
const wind = document.querySelector("#wind");
let quantityAmount = 100;



let quantityIncrease =  setInterval(() => createSnowflake(), quantityAmount);


quantity.addEventListener("input", () => {
  switch (quantity.value){
    case "0":
      quantityAmount = 99999999999;
      break;
    case "1":
      quantityAmount = 50;
      break;
    case "2":
      quantityAmount = 25;
      break;
    case "3":
      quantityAmount = 16.6;
      break;
    case "4":
      quantityAmount = 12.5;
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
  let icon = randomIcon();

  snowFlake.classList.add("fas", icon);
  snowFlake.style.left = randint(0, 100) + "%";
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = randint(MIN_SIZE, MAX_SIZE) + "px";
  snowFlake.style.color = snowColor.value;
  snowFlake.style.transform = `rotate(${wind.value*-1}deg)`;
 

  snowflakesContainer.appendChild(snowFlake);


  if (icon === "fa-snowflake"){
    snowFlake
    
        .animate(
          
          { transform: `translate(${wind.value}vw, 100vh) rotate(160deg)`},
          { duration: randint(MIN_DURATION, MAX_DURATION) }
        )
        .finished.then(() => snowFlake.remove());
    }
  
  
  if (icon === "fa-tint"){
    snowFlake
    
        .animate(
          
          { transform: `translate(${wind.value}vw, 100vh) rotate(${wind.value*-1}deg)`},
          { duration: randint(MIN_DURATION, MAX_DURATION) }
        )
        .finished.then(() => snowFlake.remove());
    }

}
