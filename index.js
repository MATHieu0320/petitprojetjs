import { ilomettre } from "./EnQuoiConvertir";

console.log("dcvv");
const input = document.querySelector("input");
const btn = document.querySelector("button");
const reponse = document.getElementById("reponse");

const ul1 = document.querySelectorAll(".un li");
const ul2 = document.querySelectorAll(".deux li");

let functionajouer;
ul1.forEach((li) => {
  li.addEventListener("click", (e) => {
    functionajouer = e.target.id;
    console.log("function a jouer : " + functionajouer);
    console.log(functionajouer);
  });
});
input.addEventListener("input", (e) => {
  let valeur = e.target.value;
  console.log(e.target.value);

  if (isNaN(valeur)) {
    reponse.innerHTML = "la valeur n'est pas un chiffre";
  }
  if (functionajouer == "Kilomettre") {
    Kilomettre(e.target.value);
  }
  if (functionajouer == "mettre") {
    Mettre(e.target.value);
  }
  if (functionajouer == "decimettre") {
    Decimettre(e.target.value);
  }
  if (functionajouer == true) {
    functionn(centimetre);
  }
  if (functionajouer == true) {
    functionn(millimettre);
  }
});

function Kilomettre(valeur) {
  if (kilomettre == true) {
    reponse.innerHTML = valeur + " km";
  }
  if (mettre == true) {
    reponse.innerHTML = valeur / 1000 + " m";
  }
  if (decimettre == true) {
    reponse.innerHTML = valeur * 10000 + " dm";
  } else if (centimetre == true) {
    reponse.innerHTML = valeur * 1000000 + " cm";
  } else if (millimettre == true) {
    reponse.innerHTML = valeur * 10000000 + " mm";
  }
}
function Mettre(valeur) {
  if (kilomettre == true) {
    reponse.innerHTML = valeur / 1000 + " km";
  }
  if (mettre == true) {
    reponse.innerHTML = valeur + " m";
  }
  if (decimettre == true) {
    reponse.innerHTML = valeur * 10 + " dm";
  }
  if (centimetre == true) {
    reponse.innerHTML = valeur * 100 + " cm";
  }
  if (millimettre == true) {
    reponse.innerHTML = valeur * 1000 + " mm";
  }
}
function Decimettre(valeur) {
  // if (kilomettre == true) {
  //   reponse.innerHTML = valeur / 10000 + " km";
  // }
  // if (mettre == true) {
  //   reponse.innerHTML = valeur + " m";
  // }
  // if (decimettre == true) {
  //   reponse.innerHTML = valeur + " dm";
  // }
  // if (centimetre == true) {
  //   reponse.innerHTML = valeur * 10 + " cm";
  // }
  // if (millimettre == true) {
  //   reponse.innerHTML = valeur * 100 + " mm";
  // }
  switch (true) {
    case kilomettre:
      reponse.innerHTML = valeur + " m";
      break;

    default:
      break;
  }
}

ul2.forEach((li) => {
  li.addEventListener("click", (e) => {
    if (e.target.id == "Kilomettre2") {
      kilomettre = true;

      console.log(kilomettre);
    }
    if (e.target.id == "mettre2") {
      mettre = true;
      console.log(mettre);
    }
    if (e.target.id == "decimetttre2") {
      decimettre = true;
      console.log(decimettre);
    }
    if (e.target.id == "centimettre2") {
      centimetre = true;
      console.log(centimetre);
    }
    if (e.target.id == "milimettre2") {
      millimettre = true;
      console.log(millimettre);
    }
  });
});
function execution(functionn) {
  if (kilomettre == true) {
    Kilomettre(kilomettre);
    kilomettre = false;
  }
  if (mettre == true) {
    functionn(mettre);
    mettre = false;
  }
  if (decimettre == true) {
    functionn(decimettre);
    decimettre = false;
  }
  if (centimetre == true) {
    functionn(centimetre);
    centimetre = false;
  }
}
if (millimettre == true) {
  functionn(millimettre);
  millimettre = false;
}

execution(functionajouer);

