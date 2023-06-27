"use strict";

const send = document.getElementById('send');

const reload = document.getElementById('reload');

const input = document.querySelector('input');

const resultText = document.getElementById('resultText');

const image = document.getElementById('imgpokemon');

const puntaje = document.getElementById('puntaje');




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
  cantidadEncuestados++  

  const answer = input.value;
  const inputAnswer = answer.toLowerCase();
  const pokeName = pokemons[numero]["name"];
  
 if(answer === "" || answer === answer.toUpperCase()){
  alert('Debes ingresar una respuesta en minusculas')
 } 
 
 if (inputAnswer === pokeName.toLowerCase()){
  resultText.innerHTML = `Yes!, It's ${pokeName}`;
  image.classList.add('success');
  cantidadAcertados++
 }else{
  resultText.innerHTML = `No!, It's ${pokeName}`;
 }

 puntaje.innerHTML = `Puntaje ${cantidadAcertados} de ${cantidadEncuestados}`;

 const score = ((cantidadAcertados / cantidadEncuestados) < 0.5 ? 
                 puntaje.classList.add('puntajeBajo'): 
                 puntaje.classList.remove('puntajeBajo'));

  
}

