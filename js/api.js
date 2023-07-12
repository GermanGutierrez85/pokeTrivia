'use strict';

const dominio = `https://pokeapi.co/api/v2/pokemon/${numero+1}`;


const buscarPokemon = async () =>{
 
    const resp = await fetch(dominio);

    if(resp.ok){
         const json = await resp.json();
         console.log(json)
            console.log(json.name)
            console.log(json.id)
            console.log(json.types[0].type.name)
            
        }
       
    
    
    
    
    
 
}
buscarPokemon();
