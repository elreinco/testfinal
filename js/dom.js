'use strict'


var vector = ["#label","#input","#boton"];

function ocultar(i){
	for(var j in vector){
		let grupo =document.querySelector(vector[j] +i);
		grupo.style.display="none"
	}
}


function mostrar(i){
	for(var j in vector){
		let grupo =document.querySelector(vector[j] + i);
		grupo.style.display="block"
	}
}

var botoni = document.querySelector(".botoni");
botoni.addEventListener("click",()=>{
	document.querySelector("#inicio").style.display="none";
	mostrar(1);
	botoni.style.display="none";
})

document.querySelector("#boton1").addEventListener("click",()=>{
	ocultar(1);
	mostrar(2);
})

document.querySelector("#boton2").addEventListener("click",()=>{
	ocultar(2);
	mostrar(3);
})



// GUARDAR EN EL LOCAL STORAGE
var edad;
var caida;

function obtener(){
	 edad = document.querySelector("#input1").value;
	 caida = document.querySelector("#input2").value;
} 

function guardar(){
	localStorage.setItem("edad",edad);
	localStorage.setItem("caidaCabello",caida);
}


//Funcion redireccionar a resultados
function redirect(){
	window.location.href = "resultados.html"
}


document.querySelector("#boton3").addEventListener("click",()=>{
	ocultar(3);
	obtener();
	guardar();
	document.querySelector("#enviar").style.display="block";
})








