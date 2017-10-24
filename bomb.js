//posage bombe
function dropBomb() {
    var div = document.createElement("div");
    div.style.top = topPlayerPosition + "px";
    div.style.left = leftPlayerPosition + "px";
    div.style.visibility = "visible";
    div.className = "bomb"
    document.body.appendChild(div);
    //gestion du comportement de la bombe : explosion et dégâts.
    setTimeout(function(){
        div.style.visibility = "hidden";
    },1500);
    
}