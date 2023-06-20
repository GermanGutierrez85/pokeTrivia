"use strict";

const send = document.getElementById('send');

const reload = document.getElementById('reload');

const input = document.querySelector('input');


function agregarEventos() {
  // evento de "click" sobre boton reload 
  // Alumno: Al precionar el boton reload se debe llamar
  // a la función "reset"
  reload.onclick = () =>{
    restart();
  
 }
}

send.onclick = () =>{
  input.onchange = () =>{
    return input.value
  }
  let respuesta = input.value

  if(respuesta === "" || respuesta === respuesta.toUpperCase()){
    alert('Debes ingresar una respuesta en minusculas')
  }else{
    cantidadEncuestados++
  }
  console.log(cantidadEncuestados)
}

/* const nombrePokemon = pokemons[numero]
console.log(nombrePokemon) */
console.log();