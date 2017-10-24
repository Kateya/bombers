// ce fichier gère les déplacements et la pose des bombes

//déclaration de l'objet personnage (joueur et ennemis)

var player = document.getElementById("perso");
var mob = document.getElementById("mob");
//position du joueur

    document.addEventListener("keydown",function(evenement) {
        startGame(evenement);
    });
function startGame(event) {
    //déplacement
        if (event.keyCode == 39) {
            moveRight(player);
        }
        if (event.keyCode == 37) {
            moveLeft(player);
        }
        if (event.keyCode == 38) {
            moveUp(player);
        }
        if (event.keyCode == 40)  {
            moveDown(player);
        }
        //bombe touche espace
        if (event.keyCode == 32) {
            dropBomb();
        }
    
}

//mouvement à droite
function moveRight(character) {
    var leftCharacterPosition = parseInt(character.style.left);
    var topCharacterPosition = parseInt(character.style.top);
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.
    if (leftCharacterPosition < 750) {        
    //déplacement 
    leftCharacterPosition += 65;
        character.style.left = leftCharacterPosition + "px";
        }
    else {
        character.style.left = leftCharacterPosition + "px";
    }
}

//mouvement à gauche
function moveLeft(character) {
    var leftCharacterPosition = parseInt(character.style.left);
    var topCharacterPosition = parseInt(character.style.top);
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.
    if (0 < leftCharacterPosition) {        
    //déplacement 
    leftCharacterPosition -= 65;
        character.style.left = leftCharacterPosition + "px";
        }
    else {
        character.style.left = leftCharacterPosition + "px";
    }
}

//mouvement en haut
function moveUp(character) {
    var leftCharacterPosition = parseInt(character.style.left);
    var topCharacterPosition = parseInt(character.style.top);
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.
    if (0 < topCharacterPosition) {
        //déplacement 
        topCharacterPosition -= 65;
        character.style.top= topCharacterPosition + "px";
    }
    else {
        character.style.top = topCharacterPosition + "px";
    }
}

//mouvement en bas
function moveDown(character) {
    var leftCharacterPosition = parseInt(character.style.left);
    var topCharacterPosition = parseInt(character.style.top);
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.
    if (topCharacterPosition < 585) {
        //déplacement 
        topCharacterPosition += 65;
    character.style.top = topCharacterPosition + "px";
    }
    else {
        character.style.top = topCharacterPosition + "px";
    }
}