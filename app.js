
var lower = document.getElementById("lower");
var counter = document.getElementById("numerocounter");
var add = document.getElementById("add");
var reset = document.getElementById("reset"); 

   add.onclick = function(){
        let a = parseInt((document.getElementById("numerocounter").innerHTML), 10);
        let b = (a + 1).toString();
        document.getElementById("numerocounter").innerHTML = b;
            if (parseInt((document.getElementById("numerocounter").innerHTML), 10) > 0){
            document.getElementById("numerocounter").style.color = "#008000";}
            if (parseInt((document.getElementById("numerocounter").innerHTML), 10) == 0){
                document.getElementById("numerocounter").style.color = "#000000";}
            if (parseInt((document.getElementById("numerocounter").innerHTML), 10) < 0){
                document.getElementById("numerocounter").style.color = "#FF4500";}
    }

    lower.onclick = function(){
        let a = parseInt((document.getElementById("numerocounter").innerHTML), 10);
        let b = (a - 1).toString();
        document.getElementById("numerocounter").innerHTML = b;
            if (parseInt((document.getElementById("numerocounter").innerHTML), 10) > 0){
            document.getElementById("numerocounter").style.color = "#008000";}
            if (parseInt((document.getElementById("numerocounter").innerHTML), 10) == 0){
                document.getElementById("numerocounter").style.color = "#000000";}
            if (parseInt((document.getElementById("numerocounter").innerHTML), 10) < 0){
                document.getElementById("numerocounter").style.color = "#FF4500";}
    }

    reset.onclick = function(){        
        document.getElementById("numerocounter").innerHTML = 0;
        document.getElementById("numerocounter").style.color = "#000000";    
    }