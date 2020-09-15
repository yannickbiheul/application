let compteurElt = document.getElementById("titreApp");

function diminuerCompteur() {
    let compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        clearInterval();
        compteurElt.textContent = "APPLICATIONS";
        compteurElt.style.fontSize = "4em";
    }
    
}

setInterval(diminuerCompteur, 1000);