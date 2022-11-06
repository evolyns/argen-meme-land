"use strict"
let fecha__actualizada = "Actualizado el 06/11/22"
const bloque__registro = document.querySelector(".bloque__registro");
const  bloque__Isesion = document.querySelector(".bloque__Isesion");

// const boton__cerrar__registro = document.querySelector(".boton__cerrar__registro");
alert(fecha__actualizada)
alert("Nuevos cambios: Agregado el boton del perfil del usuario en la barra de navegacion. Creada la lista dentro del icono " )
// FUNCIONES RECUADRO REGISTRO 
function recuadro__registro1 (){
    bloque__registro.style.visibility="visible";
    return false;

}
 function cerrar__registro(){
        bloque__registro.style.visibility="hidden"
        return false;
    }
// FUNCIONES RECUADRO INICIO SESION

function recuadro__Isesion (){
    bloque__Isesion.style.visibility="visible";
    return false;
}
function cerrar__Isesion (){
    bloque__Isesion.style.visibility="hidden";
    return false;
}



 fecha__actualizada = "Actualizado el 04/11/22"