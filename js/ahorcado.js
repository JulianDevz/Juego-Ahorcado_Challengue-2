function ahorcar(intentoErrado){

    switch (intentoErrado) {
    case 1:
        crearTrazos(500,100,500,450);
        break;
    case 2: 
        crearTrazos(500,100,720,100);
        break
    case 3: 
        crearTrazos(720,100,720,140);
        break; 
    case 4:
        crearCirculo(720,170);
        break;
    case 5:
        crearTrazos(720,200,720,350);
        break;
    case 6:
        crearTrazos(720,350,770,430);
        break;
    case 7:
        crearTrazos(720,350,670,430);
        break;    
    case 8:
        crearTrazos(720,200,670,290);
        break; 
    case 9:
        crearTrazos(720,200,770,290);  
        break; 
    } 
}

function dibujarTexto(texto,x,y){
    pincel.beginPath();
    pincel.font = "25pt Verdana";
    pincel.fillStyle = "black";
    pincel.fillText(texto,x,y);
}

var contadorletrasEscritas = 0;
function dibujarLetras(letra, posicion,cantidadLetras){   
    var contador = 0;
    for(var x = 0; x < cantidadLetras; x++){
        if(posicion == x){
            dibujarTexto(letra,310 + contador,520);
            contadorletrasEscritas += 1;
        }
        contador += 70;
    }
    if(contadorletrasEscritas == cantidadLetras){
        Swal.fire({
            title: 'Felicidades has ganado el juego!!',
            width: 800,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/img/nyan-cat.gif")
              left top
              no-repeat
            `
        })
    }
}

var palabraSecreta;
function dibujarGuiones(){
    palabraSecreta = sortearPalabra(palabrasSecretas);
    var largoPalabraSecreta = palabraSecreta.length;
    var contador = 0;
    for(var x=0 ; x < largoPalabraSecreta ; x++){
        crearTrazos(300 + contador,530,350 + contador,530)
        contador += 70;
    }
}

var letrasErradas = [];
function dibujarLetrasErradas(letra, IntentoUsado){
    var contador = 0;
    for(var x = 1; x < 10; x++){
        if(IntentoUsado == x){
            var letraIncluida = letrasErradas.includes(letra);
            letraOprimida = letrasOprimidas.includes(LetraEnMayuscula);
            //Mientras que la letra no este dentro del array de erradas y tampoco este en teclas oprimidas entonces dibujar
            //la letra en el espacio de letras erradas
            if(letraIncluida == false && letraOprimida == false){
                dibujarTexto(letra,450 + contador,660);
                ahorcar(IntentoUsado);
            }
        }
        contador += 45; //Separacion de cada letra
    }
    if(IntentoUsado == 9){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Has sido ahorcado, la palabra correcta era: ' + palabraSecreta,
        })
    }
    letrasErradas.push(letra);//Agregamos la letra errada al array
}