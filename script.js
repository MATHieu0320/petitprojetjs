const input = document.querySelector("input");
const btn = document.querySelector("button");
const reponse = document.getElementById("reponse");
console.log(reponse);
let mettre,
  decimettre,
  centimetre,
  millimettre = false;

input.addEventListener("input", (e) => {
  let valeur = e.target.value;
  console.log(e.target.value);

  if (isNaN(valeur)) {
    reponse.innerHTML = "la valeur n'est pas un chiffre";
  } else {
    Kilomettre(valeur);
  }
});

function Kilomettre(valeur) {
  if (mettre == true) {
    reponse.innerHTML = valeur / 1000 + "m";
  } else if (decimettre == true) {
    reponse.innerHTML = valeur * 10000 + "dm";
  } else if (centimetre == true) {
    reponse.innerHTML = valeur * 1000000 + "cm";
  } else if (millimettre == true) {
    reponse.innerHTML = valeur * 10000000 + "mm";
  }
}
