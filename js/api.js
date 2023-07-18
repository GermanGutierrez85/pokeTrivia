'use strict';
//LLamada a nodos para reemplazar
const pokeName = document.querySelector('#data-poke-name');
const pokeId = document.querySelector('#data-poke-id');
const pokeTypes = document.querySelector('#data-poke-types');
const pokeStats = document.querySelector('#data-poke-stats');

const dominio = 'https://pokeapi.co/api/v2/pokemon/'


const buscarPokemon = async () =>{
    
 
    const resp = await fetch(`${dominio}${numero +1}`);

    if(resp.ok){
         const json = await resp.json();
         console.log(json)

         

         //Reemplazo de los datos del pokemon acertado
         pokeName.innerText = json.name.toUpperCase();
         pokeId.innerHTML = 'N°' + ' ' + json.id;
         
         const stats = json.stats
         const types = json.types
         let typeAccumulator = '';
         types.forEach(element => {
            typeAccumulator+=`<div>${element.type.name}</div>`
            console.log(element.type.name)
         });
         pokeTypes.innerHTML = typeAccumulator.toUpperCase();
         
         let statAccumulator ='';
         stats.forEach(element => {
            const name = element.stat.name
            const amount = element.base_stat
                statAccumulator+=`<div class= 'atributos'>
                                     <div>${name}</div
                                     <div>${amount}</div>
                                  </div>`
         });
         pokeStats.innerHTML = statAccumulator
            
        }else{
            console.error('ERROR - Promise fail!')
        } 
 
}


