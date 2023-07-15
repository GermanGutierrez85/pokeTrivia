"use strict";
//In this script, we have 
// 1- the "onclick" event 
//to load all the specifications of the Pokémon 
//in case you guess correctly.
// 2- "Load score" function
// 3- "Clear all the skills" function

const send = document.getElementById('send');

const reload = document.getElementById('reload');

const input = document.querySelector('input');

const resultText = document.getElementById('resultText');

const image = document.getElementById('imgpokemon');

const puntaje = document.getElementById('puntaje');

const poke = JSON.parse(jsonData);

const pokemons = poke.map( p => 
                     new Pokemon(p.id, p.name)
                     );

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
  document.querySelector('#skills-description').attributeStyleMap.clear();
  cantidadAcertados++;
  buscarPokemon();
 }else{
  resultText.innerHTML = `No!, It's ${pokeName}`;
   
 }
 
 // Save score at sessionStorage
 sessionStorage.setItem('acertados', cantidadAcertados);
 sessionStorage.setItem('encuestados', cantidadEncuestados);
 const encuestados = sessionStorage.getItem('encuestados');
 const acertados = sessionStorage.getItem('acertados');
 
 
 puntaje.textContent = `Puntaje ${acertados} de ${encuestados}`;

 const score = ((acertados / encuestados) < 0.5 ? 
                 puntaje.classList.add('puntajeBajo'): 
                 puntaje.classList.remove('puntajeBajo'));
 

  
}

//Autocall function to load the score
(function cargarPuntaje (){
 
  const acertados = sessionStorage.getItem('acertados') === null ? 0 : sessionStorage.getItem('acertados')
  const encuestados = sessionStorage.getItem('encuestados') === null ? 0 : sessionStorage.getItem('encuestados')

  const score = ((acertados / encuestados) < 0.5 ? 
                 puntaje.classList.add('puntajeBajo'): 
                 puntaje.classList.remove('puntajeBajo'));

 puntaje.textContent = `Puntaje ${acertados} de ${encuestados}`

})();

//Clear skillscard
const clearSkills = () =>{
  pokeName.innerHTML = "";
  pokeId.innerHTML = "";
  pokeTypes.innerHTML = "";
  pokeStats.innerHTML = "";
}