let compteurElt = document.getElementById("titreApp");

function diminuerCompteur() {
    let compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        clearInterval(intervalId);
        compteurElt.style.fontSize = "4em";
        compteurElt.textContent = "Bienvenue dans";
        setTimeout(function() {
            compteurElt.textContent = "APPLICATIONS";
        }, 2000);
    }
    
}

let intervalId = setInterval(diminuerCompteur, 1000);

let baballe = document.querySelector(".baballe");
let cadreBalle = document.querySelector(".cadreBalle");
let vitesse = 7;
let largeurBaballe = parseFloat(getComputedStyle(baballe).width);
let animationId = null;

function deplacerBaballe() {
    let xBalle = parseFloat(getComputedStyle(baballe).left);
    let xMax = parseFloat(getComputedStyle(cadreBalle).width) - vitesse;
    if (xBalle + largeurBaballe <= xMax) {
        baballe.style.left = (xBalle + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBaballe);
    } else {
        cancelAnimationFrame(animationId);
    }
}

animationId = requestAnimationFrame(deplacerBaballe);



/* CHRONOMETRE */

// Variables
let heures = document.querySelector(".heures>h2");
let h = Number(heures.textContent);
let minutes = document.querySelector(".minutes>h2");
let m = Number(minutes.textContent);
let secondes = document.querySelector(".secondes>h2");
let s = Number(secondes.textContent);
let bouton = document.querySelector(".btn");

function demarrerChrono() {
    secondes.textContent = "0" + (s + 1);
    
}

setInterval(demarrerChrono, 1000);