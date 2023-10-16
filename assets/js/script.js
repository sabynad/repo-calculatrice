// test java script si bien chargé dans ma page html
console.log("ça marche au boulot^^");

// Array pour stocker les opérations
const arraySaisies = [];

// je crée une variable pour mes signes
let lesSignes = ["+","-","*","/"];

// je crée variable bouton "."
let point = ".";



//              CREE VARIABLES POUR LA STRUCTURE DE MA CALCULATRICE

// conteneur main
let calculatrice = document.createElement("main");
document.body.appendChild(calculatrice);

// ecran
let ecran = document.createElement("div");
ecran.classList.add("ecran");
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
    bouton.classList.add("btn");
    chiffres == 10 ? bouton.innerText = chiffres - chiffres : bouton.innerText = chiffres;
    clavierChiffres.appendChild(bouton);
}

// création boutons symboles 
for (let indexSignes = 0; indexSignes <= 3; indexSignes++){ 
let bouton = document.createElement("button");
bouton.classList.add("btn");
bouton.innerText = lesSignes[indexSignes];
clavierSymboles.appendChild(bouton);
}

// variable creer en haut puis faire le bouton"." enfant de clavier
let btnPoint = document.createElement("button")
btnPoint.classList.add("btn-point","btn");
btnPoint.innerText = point;
clavierChiffres.appendChild(btnPoint);


// variable creer en haut faire le bouton "c" enfant de clavierChiffres
let btnC = document.createElement("button");
btnC.classList.add("btnC");
btnC.innerText="AC";
clavierChiffres.appendChild(btnC);
// bouton AC reset l'affichage 
btnC.addEventListener("click", () => {
    document.querySelector(".ecran").innerText = "";
    if (arraySaisies.length == 0) {
            document.querySelector(".ecran").innerText = ""; 
        }
} )

// variable creer en haut faire le bouton "=" enfant de clavierChiffres
let btnEgale = document.createElement("button");
btnEgale.classList.add("btn-egale");
btnEgale.innerText = "=";
clavierChiffres.appendChild(btnEgale);
// calcule simple 
 let calcul = document.querySelector(".btn-egale");
     calcul.addEventListener('click', () => {
         document.querySelector(".ecran").innerText = 
         eval(document.querySelector(".ecran").innerText);
     })

// inscrire valeur seclectionner dans l'affichage
let mesBoutons = document.querySelectorAll(".btn");
console.log(mesBoutons);
mesBoutons.forEach(unBouton => {
    unBouton.addEventListener("click", function() {
        if (arraySaisies.length == 0) {
            document.querySelector(".ecran").innerText = ""; 
        }
        document.querySelector(".ecran").innerText += unBouton.innerText;
            arraySaisies.push(unBouton.innerText);
            console.log(arraySaisies);
            console.log("Vous avez cliqué sur : ", unBouton.innerText);      
    })
})
    //  for (let index = 0; index <= mesBoutons.length; index++) {
    //  mesBoutons[index].addEventListener('click', eventClick => {
    //  document.querySelector(".ecran").innerText += eventClick.target.innerText;
    //     })                    
    //  }












