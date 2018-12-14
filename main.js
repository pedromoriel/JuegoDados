var player1="";
var player2="";
var sumar=parseInt(0);
let sumaTotal1=parseInt(0);
let sumaTotal2=parseInt(0);
var current=0;
var cambio=false;
function nombre1(){
    player1=prompt("Ingresa el nombre del jugador 1: ");
    document.addEventListener(getElementById("player1").innerHTML=player1);
}
function nombre2(){
    player2=prompt("Ingresa el nombre del jugador 2: ");
    document.getElementById("player2").innerHTML=player2;
}

//creamos funcion para resetear variables y crear nuevo escenario
function nuevo(){
    alert('Preparando nuevo juego!!');
    document.getElementById("score-0").innerHTML="0";
    document.getElementById("current-0").innerHTML="0";
    document.getElementById("score-1").innerHTML="0";
    document.getElementById("current-1").innerHTML="0";
    sumar=0;
    current=0;
    sumaTotal1=0;
    sumaTotal2=0;
}
function rand(n){
    // creamos un numero al azar entre 1 y 6
     return(Math.floor(Math.random() * n + 1 ));
    }
    //guardas imagenes en el array
    var cambia_imagen = new Array();
    cambia_imagen[0] = "dice-1.png";
    cambia_imagen[1] = "dice-2.png";
    cambia_imagen[2] = "dice-3.png";
    cambia_imagen[3] = "dice-4.png";
    cambia_imagen[4] = "dice-5.png";
    cambia_imagen[5] = "dice-6.png";        
    
    function cambiar(){
        let i=rand(6)-1;       
        document.getElementById("dice").src = cambia_imagen[i];
        if(sumaTotal1>=30)
        {
            alert("Gana Player 1")
            nuevo();
        }else if(sumaTotal2>=30){
            alert("Gana Player 2")
            nuevo();
        }
        else{
            if(current===0){
                if(i>0){
                    sumar=sumar+(i+1);
                               
                    document.getElementById("current-0").innerHTML=sumar;
                }
                else{
                    sumar=0;
                    document.getElementById("current-0").innerHTML=sumar;
                    alert("Perdiste los puntos acumulados!!");
                    current=1;
                    document.getElementById("player-0-panel").classList.remove("active");
                    document.getElementById("player-1-panel").classList.add("active");
                }
            }else{
                if(i>0){
                    sumar=sumar+(i+1);
                               
                    document.getElementById("current-1").innerHTML=sumar;
                }
                else{
                    sumar=0;
                    document.getElementById("current-1").innerHTML=sumar;
                    alert("Perdiste los puntos acumulados!!");
                    current=0;
                    document.getElementById("player-1-panel").classList.remove("active");
                    document.getElementById("player-0-panel").classList.add("active");
                }
            }
        }
                                    
   } 
   function hold0(){
       if(current===0){
        sumaTotal1=sumaTotal1+sumar;

        document.getElementById("score-0").innerHTML=sumaTotal1;
        current=1;
        sumar=0;        
        document.getElementById("current-0").innerHTML="0";
        document.getElementById("player-0-panel").classList.remove("active");
        document.getElementById("player-1-panel").classList.add("active");

       }
       else{
        sumaTotal2=sumaTotal2+sumar;        
        document.getElementById("score-1").innerHTML=sumaTotal2;
        current=0;
        sumar=0;        
        document.getElementById("current-1").innerHTML="0";
        document.getElementById("player-1-panel").classList.remove("active");
        document.getElementById("player-0-panel").classList.add("active");
       }
        
   }  
