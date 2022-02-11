var palabrasSecretas = ["ARBOL","CONEJO","CAMION","DIA","EDIFICIO","TELEFONO","MUSCULO","EJERCICIO","INGLES","ARTE","CALLE","LETRA","JUEGO","PANTALLA","SOFA"];

function sortearPalabra(palabras){
    var numeroRandom = Math.floor(Math.random()*palabras.length);
    var palabraRandom = palabras[numeroRandom];
    return palabraRandom;
}

function redireccionar(){
    document.location="ahorcado.html";
}

var numeros="0123456789";
function tiene_numeros(texto){
    for(i=0; i<texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0) != -1){
            return true;
        }
    }
    return false;
 } 

 var letras="abcdefghyjklmnñopqrstuvwxyz";
 function tiene_minusculas(texto){
    for(i=0; i<texto.length; i++){
       if (letras.indexOf(texto.charAt(i),0)!=-1){
          return true;
       }
    }
    return false;
 }  

var input = document.querySelector("#input-nueva-palabra");
var guardarPalabra = document.querySelector("#guardar-palabra");
var palabraNueva;
guardarPalabra.addEventListener("click",function(){
    palabraNueva = input.value
    console.log(palabraNueva)

    var hayNumeros = tiene_numeros(palabraNueva);
    if(hayNumeros == true){
        Swal.fire({
            title: 'El texto no puede contener numeros!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    var hayMinusculas = tiene_minusculas(palabraNueva);
    if(hayMinusculas == true){
        Swal.fire({
            title: 'El texto no puede contener caracteres en minuscula!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    if(palabraNueva == ""){
        Swal.fire({
            title: 'El texto no puede estar vacio!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    if(palabraNueva.length > 12){
        Swal.fire({
            title: 'El texto no puede ser mayor a 12 caracteres!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    

    if(palabraNueva.length > 0 && hayNumeros == false && hayMinusculas == false && palabraNueva.length <= 12){
        localStorage.setItem('NuevaPalabra',palabraNueva);
        input.value = "";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu palabra ha sido guardada',
            showConfirmButton: false,
            timer: 1500
        })

        setTimeout('redireccionar()', 2000);
    }
})



