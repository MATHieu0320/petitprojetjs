const input = document.querySelector("input");
const btn = document.querySelector("button");
const reponse = document.getElementById("reponse");

const ul1 = document.querySelectorAll(".un li");
const ul2 = document.querySelectorAll(".deux li");

function tousfalse(sauf) {
  mettre,
    (decimettre = false),
    (centimetre = false),
    (millimettre = false),
    (kilomettre = false);
  sauf = true;
}
let mettre,
  decimettre,
  centimetre,
  millimettre,
  kilomettre = false;
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
  if (kilomettre == true) {
    reponse.innerHTML = valeur / 1000 + "m";
  }
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
let functionajouer;
ul1.forEach((li) => {
  li.addEventListener("click", (e) => {
    functionajouer = e.target.id;
    console.log("function a jouer : " + functionajouer);
  });
});
ul2.forEach((li) => {
  li.addEventListener("click", (e) => {
    if (e.target.id == "Kilomettre2") {
      kilomettre = true;
      tousfalse(kilomettre);
      console.log(kilomettre);
    }
    if (e.target.id == "mettre2") {
      tousfalse(mettre);
      mettre = true;
      console.log(mettre);
    }
    if (e.target.id == "decimetttre2") {
      tousfalse(decimettre);
      decimettre = true;
      console.log(decimettre);
    }
    if (e.target.id == "centimettre2") {
      tousfalse(centimetre);
      centimetre = true;
      console.log(centimetre);
    }
    if (e.target.id == "milimettre2") {
      tousfalse(millimettre);
      millimettre = true;
      console.log(millimettre);
    }
  });
});
function execution(functionn) {
  if (kilomettre == true) {
    functionn(kilomettre);
  }
  if (mettre == true) {
    functionn(mettre);
  }
  if (decimettre == true) {
    functionn(decimettre);
  }
  if (centimetre == true) {
    functionn(centimetre);
  }
  if (millimettre == true) {
    functionn(millimettre);
  }
}

execution(functionajouer);
