import { log } from "console";
import { Kilomettreilomettre } from "./EnQuoiConvertir";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const reponse = document.getElementById("reponse");

const ul1 = document.querySelectorAll(".un li");
const ul2 = document.querySelectorAll(".deux li");
let mettre,
  decimettre,
  centimetre,
  millimettre,
  kilomettre = false;
let functionajouer;

setInterval(() => {
  console.log(kilomettre + "kilomettre");
  console.log(mettre + "  mettre");
  console.log(decimettre + "  decimettre");
  console.log(centimetre + "  centometre");
  console.log(millimettre + "  millimettre");
}, 10000);
ul1.forEach((li) => {
  li.addEventListener("click", (e) => {
    functionajouer = e.target.id;
    console.log("function a jouer : " + functionajouer);
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
  if (functionajouer == "centimetre") {
    Centimetre(e.target.value);
  }
  if (functionajouer == true) {
    functionn(millimettre);
  }
});

function Kilomettre(valeur) {
  if (kilomettre == true) {
    reponse.innerHTML = valeur + " km";
    console.log("kilomettre est" + kilomettre);
  }
  if (mettre == true) {
    reponse.innerHTML = valeur / 1000 + " m";
    console.log("Mettre est" + mettre);
  }
  if (decimettre == true) {
    reponse.innerHTML = valeur * 10000 + " dm";
    console.log("decimettre est" + decimettre);
  } else if (centimetre == true) {
    reponse.innerHTML = valeur * 1000000 + " cm";
    console.log("centimettre est " + centimetre);
  } else if (millimettre == true) {
    console.log("milimettre est " + true);
    reponse.innerHTML = valeur * 1000000 + " mm";
  }
}
function Mettre(valeur) {
  console.log(kilomettre);
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
  // switch (true) {
  //   case kilomettre:
  //     reponse.innerHTML = valeur / 10000 + " km";
  //   case mettre:
  //     reponse.innerHTML = valeur + " m";
  //   case decimettre:
  //     reponse.innerHTML = valeur + " dm";
  //   case centimetre:
  //     reponse.innerHTML = valeur * 10 + " cm";
  //   case millimettre:
  //     reponse.innerHTML = valeur * 100 + " mm";
  // }
  if (kilomettre == true) {
    reponse.innerHTML = valeur / 10000 + " km";
  }
  if (mettre == true) {
    reponse.innerHTML = valeur * 10 + " m";
  }
  if (decimettre == true) {
    reponse.innerHTML = valeur + " dm";
  }
  if (centimetre == true) {
    reponse.innerHTML = valeur * 10 + " cm";
  }
  if (millimettre == true) {
    reponse.innerHTML = valeur * 100 + " mm";
  }
}
function Centimetre(valeur) {
  //   case kilomettre:
  //     reponse.innerHTML = valeur / 100000 + " km";
  //   case mettre:
  //     reponse.innerHTML = valeur / 100 + " m";
  //   case decimettre:
  //     reponse.innerHTML = valeur / 10 + " dm";
  //   case centimetre:
  //     reponse.innerHTML = valeur + " cm";
  //   case millimettre:
  //     reponse.innerHTML = valeur * 10 + " mm";
  // }  if (kilomettre == true) {
  if (kilomettre == true) {
    reponse.innerHTML = valeur / 100000 + " km";
  }

  if (mettre == true) {
    reponse.innerHTML = valeur / 100 + " m";
  }
  if (decimettre == true) {
    reponse.innerHTML = valeur / 10 + " dm";
  }
  if (centimetre == true) {
    reponse.innerHTML = valeur + " cm";
  }
  if (millimettre == true) {
    reponse.innerHTML = valeur * 10 + " mm";
  }
}
function Milimettre(valeur) {
  if (kilomettre == true) {
    reponse.innerHTML = valeur / 1000000 + " km";
  }

  if (mettre == true) {
    reponse.innerHTML = valeur / 1000 + " m";
  }
  if (decimettre == true) {
    reponse.innerHTML = valeur / 100 + " dm";
  }
  if (centimetre == true) {
    reponse.innerHTML = valeur * 10 + " cm";
  }
  if (millimettre == true) {
    reponse.innerHTML = valeur + " mm";
  }
}

ul2.forEach((li) => {
  li.addEventListener("click", (e) => {
    if (e.target.id == "Kilomettre2") {
      kilomettre = true;
      mettre = false;
      decimettre = false;
      centimetre = false;
      millimettre = false;

      console.log(kilomettre);
    }
    if (e.target.id == "mettre2") {
      mettre = true;
      console.log(mettre);
      kilomettre = false;
      decimettre = false;
      centimetre = false;
      kilomettre = false;
      millimettre = false;
    }
    if (e.target.id == "decimetttre2") {
      decimettre = true;
      console.log(decimettre);
      kilomettre = false;
      millimettre = false;
      centimetre = false;
      millimettre = false;
    }
    if (e.target.id == "centimettre2") {
      centimetre = true;
      kilomettre = false;
      decimettre = false;
      millimettre = false;
      kilomettre = false;
      console.log(centimetre);
    }
    if (e.target.id == "milimettre2") {
      millimettre = true;
      kilomettre = false;
      decimettre = false;
      centimetre = false;
      kilomettre = false;
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


execution(functionajouer);

