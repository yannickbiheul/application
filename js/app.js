let compteurElt = document.getElementById("titreApp");
let timeoutId;

function diminuerCompteur() {
    let compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        clearInterval();
        compteurElt.style.fontSize = "4em";
        compteurElt.textContent = "Applications";
    }
    
}

setInterval(diminuerCompteur, 1000);