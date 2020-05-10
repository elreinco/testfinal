'use strict'


var texto = document.createElement("p");
//Agregar datos del localStorage
texto.append(localStorage.getItem("edad"));
texto.append(localStorage.getItem("caidaCabello"));
//Traer el espacio del DOM
var espacio = document.querySelector("#texto");
espacio.append(texto);

localStorage.clear();