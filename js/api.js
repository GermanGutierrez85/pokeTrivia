'use strict';

const dominio = `https://pokeapi.co/api/v2/pokemon/${numero+1}`;


const buscarPokemon = async () =>{
 
    const resp = await fetch(dominio);

    if(resp.ok){
         const json = await resp.json();
         console.log(json.name)
         

            console.log(json.id)
            console.log("=====================")
            const stats = json.stats
            const types = json.types
            types.forEach(element => {
                console.log(element.type.name)
            });
            console.log("=====================")
            let acumuladorStats ="";
            stats.forEach(element => {
                
                let statName = element.stat.name;
                let base_stat = element.base_stat;
                acumuladorStats+=`<li>${statName} ${base_stat}</li>`
                console.log(`${statName} ${base_stat}`)
            });
            
        }
       
    
    
    
    
    
 
}

