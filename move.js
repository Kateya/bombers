// ce fichier gère les déplacements et la pose des bombes
//génération auto des mouvements des mobs
var grid = document.getElementById("grid");

function mobMove() {
    player.x = parseInt(player.style.left);
    player.y = parseInt(player.style.top);
    player.width = 65;
    player.height = 65;
    console.log(player);
    for (var i = 0; i < mobs.length; i++) {
    var element = mobs[i];
    mobs[i].x = parseInt(mobs[i].style.left);
    mobs[i].y = parseInt(mobs[i].style.top);
    mobs[i].width = 65;
    mobs[i].height = 65;
    if (isCollide(player, mobs[i]) == true) {
        grid.removeChild(player);
    }
    var direction = Math.floor(Math.random()*4)
        if (direction == 1) {
            moveRight(mobs[i]);
            console.log(isCollide(player,mobs[i]));
        }
        else if (direction == 2) {
            moveLeft(mobs[i]);
            console.log(isCollide(player,mobs[i]));
        }
        else if (direction == 3) {
            moveDown(mobs[i]);
            console.log(isCollide(player,mobs[i]));
        }
        else {
            moveUp(mobs[i]);
            console.log(isCollide(player,mobs[i]));
        }
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