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
        
        fetch(`http://localhost4000/detalles${id}`, {mode:'cors'})
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