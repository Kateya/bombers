var grid = document.getElementById('grid');


function test(){
    for(var y = 0; y < 10; y++)
    {  

        for(var x = 0; x < 13; x++)
        {
            grid.innerHTML = grid.innerHTML + "<div class='carre' style='left:"+x*65+"px;top:"+y*65+"px;'></div>";        
            console.log(x,y);
            
        }   
    }
}
test();