const score = document.getElementsByTagName("h1")[0];
const info = document.getElementsByTagName("p")[0];
const numberInput = document.getElementById("number-input");
const p1Input = document.getElementById("p1-btn");
const p2Input = document.getElementById("p2-btn");
const reset = document.getElementById("reset-btn");
const spans = score.children;

console.log(score.children[0]);
console.log(info);
console.log(numberInput);
console.log(p1Input);
console.log(p2Input);
console.log(reset);
console.log(spans);

let scoreP1 = 0;
let scoreP2 = 0;
let playingTo = 0;
let resetSwitch = false;

numberInput.addEventListener("change", () => {
  doReset();
  info.innerHTML = "playing to : " + numberInput.value;
  playingTo = numberInput.value;
});

p1Input.addEventListener("click", () => {
  if (scoreP1 < playingTo && scoreP2 < playingTo) {
    scoreP1++;
    score.children[0].textContent = scoreP1;
  } else {
    resetSwitch = true;
  }
  if (scoreP1 >= playingTo && playingTo != 0)
    score.children[0].classList.add("scored");
});

p2Input.addEventListener("click", () => {
  if (scoreP1 < playingTo && scoreP2 < playingTo) {
    scoreP2++;
    score.children[1].textContent = scoreP2;
  } else {
    resetSwitch = true;
  }
  if (scoreP2 >= playingTo && playingTo != 0)
    score.children[1].classList.add("scored");
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  doReset();
});

function doReset() {
  scoreP1 = 0;
  scoreP2 = 0;
  resetSwitch = false;
  score.children[0].textContent = scoreP1;
  score.children[1].textContent = scoreP2;
  score.children[0].classList.remove("scored");
  score.children[1].classList.remove("scored");
}
