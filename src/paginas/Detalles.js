import Tarjeta from "../componentes/Tarjeta";
import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function Detalles () {
    
    const [pokemon, setPokemon]= useState([]);

    const { id } = useParams();

    useEffect(()=>{
        getPokemon()
    },[])

    const getPokemon = () => {
        
        fetch(`https://us-central1-senpai-9b555.cloudfunctions.net/getPokemon?id=${id}`)
        .then(response=>response.json())
        .then((pokemon)=>{
            setPokemon(pokemon);
        })
        .catch(()=>{alert(`Error obteniendo pokemon ${id}`)})
    }
     console.log(pokemon)
    return ( 
              <Tarjeta infoPokemon={pokemon}/>      
    ) 

}
export default Detalles;