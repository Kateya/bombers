var leftBombposition;
var topBombposition;
//posage bombe
function dropBomb() {
    var leftBombposition = parseInt(document.getElementById("perso").style.left);
    var topBombposition = parseInt(document.getElementById("perso").style.top);
    console.log(leftBombposition);
    var div = document.createElement("div");
    div.style.top = topBombposition + "px";
    div.style.left = leftBombposition + "px";
    div.style.visibility = "visible";
    div.className = "bomb";
    grid.appendChild(div);
    //gestion du comportement de la bombe : explosion et dégâts.
    setTimeout(function(){
        grid.removeChild(div)
        explosionBomb(topBombposition,leftBombposition);
    },1500);
}

function explosionBomb(x,y) {
    var tileTopOrigin = x;
    var tileLeftOrigin = y;
    console.log(topBombposition);

    var tileUp = x-65;
    var tileDown = x+65;
    var tileRight = y+65;
    var tileLeft = y-65;
    //ciblage tuile du haut
    var divUp = document.createElement("div");
    divUp.className = "degats";
    divUp.style.top = tileUp + "px";
    divUp.style.left = tileLeftOrigin + "px";
    grid.appendChild(divUp);
    //ciblage tuile du bas
    var divDown = document.createElement("div");
    divDown.className = "degats";
    divDown.style.top = tileDown + "px";
    divDown.style.left = tileLeftOrigin + "px";
    grid.appendChild(divDown);
    //ciblage tuile de gauche
    var divLeft = document.createElement("div");
    divLeft.className = "degats";
    divLeft.style.top = tileTopOrigin + "px";
    divLeft.style.left = tileLeft + "px";
    grid.appendChild(divLeft);
    //ciblage tuile de droite
    var divRight = document.createElement("div");
    divRight.className = "degats";
    divRight.style.top = tileTopOrigin + "px";
    divRight.style.left = tileRight + "px";
    grid.appendChild(divRight);
    //ciblage tuile au centre
    var divCenter = document.createElement("div");
    divCenter.className = "degats";
    divCenter.style.top = tileTopOrigin + "px";
    divCenter.style.left = tileLeftOrigin + "px";
    grid.appendChild(divCenter);
}