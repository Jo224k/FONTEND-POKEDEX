import Header from "../componentes/Header";
import Nav from "../componentes/Nav";
import Catalogo from "../componentes/catalogo";
import React, { useEffect, useState} from "react";

function Menu () {
    const [pokemones, setPokemones]= useState([]);
    const [busqueda, setBusqueda]=useState([]);
    const [orden, setOrden]=useState("id");
    
    useEffect(()=>{
        getPokemones()
    },[])
    
    const getPokemones = () => {
        fetch("https://us-central1-senpai-9b555.cloudfunctions.net/getFullList")
        .then(response=>response.json())
        .then((pokemones)=>{
            setPokemones(pokemones);
        })
        .catch(()=>{alert("error")})
    }

    
    const ordenarPokemones = (a,b) => {
        
            if(a[orden] < b[orden])
                return -1;
            if(a[orden] > b[orden])
                return 1;
            return 0;    
    }

    return ( 
           <>
              <Header setOrden={setOrden}/>
              <Nav setBusqueda={setBusqueda}/>
              <Catalogo listaPokemones={pokemones.filter((pokemones)=>pokemones.name.match(busqueda)).sort(ordenarPokemones)}/>
           </>
    ) 

}
export default Menu;