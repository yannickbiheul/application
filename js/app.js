let compteurElt = document.getElementById("titreApp");
let timeoutId;

function diminuerCompteur() {
    let compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        clearInterval();
        compteurElt.textContent = "Bienvenue dans";
        timeoutId = window.setTimeout(afficherTitre, 2000);
        clearAlert();
    }
    
}

function afficherTitre() {
    compteurElt.textContent = "APPLICATIONS";
}

function clearAlert() {
    window.clearTimeout(timeoutId);
}

setInterval(diminuerCompteur, 1000);