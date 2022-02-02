//Dibujar tablero canvas
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "#E9ECF8";
pincel.fillRect(0,0,1200,700);

//Inicio Ahorcado
crearTrazos(300,450,900,450);
dibujarTexto("Letras Erradas:", 500, 605);

function crearTrazos(Xinicial,Yinicial,Xfinal,Yfinal){
    pincel.beginPath(); 
    pincel.strokeStyle = "#072B61";
    pincel.moveTo(Xinicial,Yinicial);
    pincel.lineTo(Xfinal,Yfinal);
    pincel.lineWidth = 2;
    pincel.stroke();
}

function crearCirculo(x,y){
    pincel.strokeStyle = "#072B61";
    pincel.beginPath();
    pincel.arc(x, y, 30, 0, 2*3.14);
    pincel.stroke();
}

var letrasOprimidas = [];
var IntentoUsado = 0;
var letraOprimida;
document.addEventListener("keydown",function(evento){
    tecla = evento.key;
    LetraEnMayuscula = tecla.toUpperCase();
    
    codigo = evento.keyCode;

    //Permitiendo solo letras del abacedario
    if (codigo >= 65 && codigo <= 90 || codigo == 192){

        contadorErradas = 0;
        var largoTexto = palabraSecreta.length;
        var letraOprimida = letrasOprimidas.includes(LetraEnMayuscula);
        console.log(letraOprimida);
        //Recorremos el texto guardado dentro del array
        for(var indiceArray = 0; indiceArray < largoTexto; indiceArray++){
            //Validamos si la tecla presionada hacer parte del texto y no esta en teclas oprimidas anteriormente, para dibujarla en el canvas
            if(arrayTexto[indiceArray] == LetraEnMayuscula && letraOprimida == false){
                dibujarLetras(LetraEnMayuscula, indiceArray,largoTexto);
            }else{
                contadorErradas += 1;
                //Contador para acumular cuando la letra no este en ninguna posicion de la palabra
            }

            //Si la letra no esta en el texto dibujamos la letra en erradas
            if(contadorErradas == largoTexto){

                //Sabemos que si la letra errada ya fue primida antes, entonces no pierde un intento
                if(letraOprimida == false){
                    IntentoUsado += 1;
                }
                dibujarLetrasErradas(LetraEnMayuscula, IntentoUsado);
            }
        }
    }
    letrasOprimidas.push(LetraEnMayuscula);
});

document.addEventListener("DOMContentLoaded",function(){
    let palabraIngresada = localStorage.getItem('NuevaPalabra');
    palabrasSecretas.push(palabraIngresada);
    dibujarGuiones();

    //Guardamos la palabra secreta dentro de un array
    arrayTexto = [];
    var largoTexto = palabraSecreta.length;  
    for(var indiceTexto = 0; indiceTexto < largoTexto; indiceTexto++){
        arrayTexto.push(palabraSecreta.charAt(indiceTexto));
    }
});