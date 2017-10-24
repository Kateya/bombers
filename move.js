// ce fichier gère les déplacements et la pose des bombes

//déclaration de l'objet personnage (joueur et ennemis)

var player = document.getElementById("perso");
var wall = document.getElementsByClassName("wall");
var bomb;

//position du joueur

var leftPlayerPosition = parseInt(document.getElementById("perso").style.left);
var topPlayerPosition = parseInt(document.getElementById("perso").style.top);

    document.addEventListener("keydown",function(evenement) {
        startGame(evenement);
    });
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
    if (leftPlayerPosition < 750) {        
    //déplacement 
        leftPlayerPosition += 65;
        player.style.left = leftPlayerPosition + "px";
        }
    else {
        player.style.left = leftPlayerPosition + "px";
    }
}

//mouvement à gauche
function moveLeft() {
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.
    if (0 < leftPlayerPosition) {        
    //déplacement 
        leftPlayerPosition -= 65;
        player.style.left = leftPlayerPosition + "px";
        }
    else {
        player.style.left = leftPlayerPosition + "px";
    }
}

//mouvement en haut
function moveUp() {
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.
    if (0 < topPlayerPosition) {
        //déplacement 
        topPlayerPosition -= 65;
        player.style.top= topPlayerPosition + "px";
    }
    else {
        player.style.top = topPlayerPosition + "px";
    }
}

//mouvement en bas
function moveDown() {
    //verification de la position du personnage => S'il n'est pas contre un mur, il peut bouger. Défininition de classes non traversables.
    if (topPlayerPosition < 585) {
        //déplacement 
    topPlayerPosition += 65;
    player.style.top = topPlayerPosition + "px";
    }
    else {
    player.style.top = topPlayerPosition + "px";
    }
}

//posage bombe
function dropBomb() {
    document.getElementById('bombContainer').innerHTML += "<div class='bomb' style= 'visibility:visible; top:"+topPlayerPosition+"px; left:"+ leftPlayerPosition+"px;'></div>";
    bomb = document.getElementsByClassName('bomb');
    console.log(bomb.style.top);
    setTimeout(explosionBomb, 900);
}

//gestion du comportement de la bombe : explosion et dégâts.

function explosionBomb() {

}