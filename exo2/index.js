const textInput = document.getElementById("text-input");
const btnInput = document.getElementById("btn-input");
const liste = document.getElementsByTagName("ul")[0];

btnInput.addEventListener("click", (e) => {
  e.preventDefault();
  if (textInput.value !== "") {
    const newLi = document.createElement("li");
    newLi.textContent = textInput.value;
    liste.appendChild(newLi);
  } else {
    console.log("Pas de texte dans l'input");
  }
});
