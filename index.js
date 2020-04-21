/*Création d'une variable nommée "dé" sans valeur de départ*/
var dé

/*Création d'une variable nommée "choix" sans valeur de départ*/
var choix

/*Création d'une variable nommée "nbEssai" avec valeur de départ 1*/
var nbEssai = 0

/*Création d'une fonction nommée "valeurDuLancéAléatoire" qui va :
choisir aléatoirement un entier inférieur entre une valeur minimum de 1 et une valeur maximun de 6 (incluses)
afficher le résultat dans la console 
créer une fenêtre d'alerte pour avertir le joueur que le dé a bien été lancé et qu'il peut tenter sa chance*/
function valeurDuLancéAléatoire() {
    dé = Math.floor(Math.random() * 6 + 1);
    console.log("Résultat du lancé :  " + dé);
    window.alert("Tentez votre chance !");
    document.getElementById("OK").disabled = false;
    document.getElementById("OK").style.background = "rgba(45, 15, 179, 0.993)";
}

/*Création d'une fonction nommée "résultatDuJeu" qui va :
récupérer la valeur du choix de l'utilisateur
afficher le résultat dans la console
implémenter le nombre d'essai de +1 tant que le résultat n'est pas trouver afin de compter le nombre d'essai
afficher le nombre d'essai dans la console
émettre un message d'alerte lors de la validation par l'utilisateur si le choix n'est pas conforme
afficher le message de résultat lors de la validation par l'utilisateur*/
function résultatDuJeu() {
    choix = document.getElementById("choix").value;
    console.log("Nombre choisi :  " + choix);
    nbEssai = nbEssai + 1
    console.log("Nombre d'essais :" + nbEssai)
    if(choix == 0){ /*le type étant number, si saisie de lettres, le résultat est 0*/
        window.alert("Votre choix n'est pas un nombre ou n'est pas un nombre compris entre 1 et 6")
    }
    if((choix<1 || choix>6) && (choix != 0)){
        window.alert("Votre choix n'est pas compris entre 1 et 6")
    }
    if (choix==dé){
        document.getElementById("résultat").innerHTML = "Bravo ! Vous avez deviné ce nombre en " + nbEssai + " essais."
        nbEssai = 0;
        document.getElementById("OK").setAttribute("disabled", "disabled");
        document.getElementById("OK").style.background = "rgba(141, 140, 143, 0.473)";
        }
        else if (choix>dé){
            document.getElementById("résultat").innerHTML = "Votre nombre est trop grand."
        }
        else {
            document.getElementById("résultat").innerHTML = "Votre nombre est trop petit."
        }
}
