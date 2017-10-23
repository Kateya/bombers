// ce fichier gère les déplacements et la pose des bombes

//déclaration de l'objet personnage (joueur et ennemis)

var player = document.getElementById("perso");
var wall = document.getElementsByClassName("wall");

//position du joueur

var rightPlayerPosition = parseInt(document.getElementById("perso").style.right);
var topPlayerPosition = parseInt(document.getElementById("perso").style.top);

function carac(type) = {
    this.type = type;
    this.health = health;
    this.strength = strength;
}
    document.addEventListener("keydown",function(evenement) {
        startGame(evenement);
    }
function startGame(event) {
    //déplacement

    if (event.keyCode == 39) {
        moveRight();
    }
    if (event.keyCode == 37) {
        moveLeft();
    }
    if (event.keyCode == 38) {
        moveUp();
    }
    if (event.keyCode == 40)  {
        moveDown();
    }
    //bombe touche espace
    if (event.keyCode == 32) {
        dropBomb();
    }
}


//mouvement à droite
function moveRight() {
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.

    //déplacement 
    rightPlayerPosition += 65;
    player.style.right = rightPlayerPosition + "px";
}

//mouvement à gauche
function moveLeft) {
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.

    //déplacement 
    rightPlayerPosition -= 65;
    player.style.right = rightPlayerPosition + "px";
}

//mouvement en haut
function moveUp() {
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.

    //déplacement 
    topPlayerPosition += 65;
    player.style.top= topPlayerPosition + "px";
}

//mouvement en bas
function moveDown() {
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.

    //déplacement 
    topPlayerPosition -= 65;
    player.style.top= topPlayerPosition + "px";
}

//posage bombe
function dropBomb() {
    document.getElementById('body').innerHTML = "<div class="bomb"></div>";
    bomb.style.top = player.style.top;
    bomb.style.right = player.style.right;
}