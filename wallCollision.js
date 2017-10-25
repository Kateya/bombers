 var destructibles = document.getElementsByClassName("destructibles");
 function wallCollision (x,y,divName) {
    divName.x = (parseInt(divName.style.left))+1;
    divName.y = (parseInt(divName.style.top))+1;
    divName.width = 63;
    divName.height = 63;
    if (isCollide(divName,player) == true) {
        grid.removeChild(player);
        gameOver();
    }
    for (var i = 0; i < destructibles.length; i++) {
        var element = destructibles[i];
        destructibles[i].x = (parseInt(destructibles[i].style.left))+1;
        destructibles[i].y = (parseInt(destructibles[i].style.top))+1;
        destructibles[i].width = 63;
        destructibles[i].height = 63;
        if (isCollide(divName, destructibles[i]) == true) {
            grid.removeChild(destructibles[i]);
        }
    }  
        for (var i = 0; i < mobs.length; i++) {
            var element = mobs[i];
            mobs[i].x = (parseInt(mobs[i].style.left))+1;
            mobs[i].y = (parseInt(mobs[i].style.top))+1;
            mobs[i].width = 63;
            mobs[i].height = 63;
            if (isCollide(divName, mobs[i]) == true) {
                grid.removeChild(mobs[i]);
                victory();
            }
        }
        
 }
 