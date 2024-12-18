const input = document.getElementsByTagName("input")[0];
const slides = document.getElementsByClassName("slides")[0];
const sliders = document.querySelector(".slides").children;
console.log(sliders);

let index = 0;

input.addEventListener("click", () => {
  sliders[index].style.opacity = 0;
  index = index + 1 > 3 ? 0 : index + 1;
  sliders[index].style.opacity = 1;
});
