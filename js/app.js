let titreApp = document.getElementById("titreApp");
let cadreApp = document.querySelector(".cadreApp");
let vitesse = 2;
let hauteurTitre = parseFloat(getComputedStyle(titreApp).height);
let animationId = null;
console.log(getComputedStyle(titreApp).top);
console.log(getComputedStyle(cadreApp).height);
console.log(hauteurTitre);

// Déplacer le titre vers le bas jusqu'au bord du cadre
function deplacerTitreBas() {
    let yTitre = parseFloat(getComputedStyle(titreApp).top);
    let yMax = parseFloat(getComputedStyle(cadreApp).height) / 2;
    if (yTitre + hauteurTitre <= yMax) {
        titreApp.style.top = (yTitre + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerTitreBas);
    } else {
        titreApp.style.letterSpacing = "6px";
        animationId = requestAnimationFrame(deplacerTitreHaut);
    }
}

function deplacerTitreHaut() {
    let yTitre = parseFloat(getComputedStyle(titreApp).top);
    let yMax = parseFloat(getComputedStyle(cadreApp).height) / 2;
    if (yTitre + hauteurTitre >= yMax) {
        titreApp.style.top = (yTitre - vitesse) + "px";
        animationId = requestAnimationFrame(deplacerTitreHaut);
    } else {
        animationId = requestAnimationFrame(deplacerTitreBas);
    }
}

animationId = requestAnimationFrame(deplacerTitreBas);