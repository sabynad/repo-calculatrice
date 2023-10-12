// test java script si bien chargé dans ma page html
console.log("ça marche au boulot^^");

// je crée une variable pour mes signes
let lesSignes = ["+","-","*","/"];

// creer variable bouton egale
let egale = "=";

// je crée un bouton "."
let point = document.createElement("div")
point.classList
//              CREE VARIABLES POUR LA STRUCTURE DE MA CALCULATRICE

// conteneur main
let calculatrice = document.createElement("main");
document.body.appendChild(calculatrice);

// ecran
let ecran = document.createElement("div");
ecran.classList.add("affichage");
ecran.innerText = 0;
calculatrice.appendChild(ecran);

//clavier
let clavier = document.createElement("div");
clavier.classList.add("clavier");
calculatrice.appendChild(clavier);

//clavierChiffres (clavier parent de clavierChiffres)
let clavierChiffres = document.createElement("div");
clavierChiffres.classList.add("clavier-chiffres");
clavier.appendChild(clavierChiffres);

// clavierSymboles (clavier parent de symboles)
let clavierSymboles = document.createElement("div");
clavierSymboles.classList.add("clavier-symboles");
clavier.appendChild(clavierSymboles);

// création boutons chiffres a l'aide d'une boucle for
for (let chiffres = 1; chiffres <= 10; chiffres++){
    let bouton = document.createElement("button");
    bouton.classList.add("bouton");
    chiffres == 10 ? bouton.innerText = chiffres - chiffres : bouton.innerText = chiffres;
    clavierChiffres.appendChild(bouton);
}

// création boutons symboles 
for (let indexSignes = 0; indexSignes <= 3; indexSignes++){ 
let bouton = document.createElement("button");
bouton.classList.add("bouton");
bouton.innerText = lesSignes[indexSignes];
clavierSymboles.appendChild(bouton);
}

// variable creer en haut faire le bouton "=" enfant de clavierChiffres
let abcd = document.createElement("button");
abcd.classList.add("btn-egale");
abcd.innerText = egale;
clavierChiffres.appendChild(abcd);














