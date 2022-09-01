import Header from "../componentes/Header";
import Nav from "../componentes/Nav";
import Catalogo from "../componentes/catalogo";
import React, { useEffect, useState} from "react";

function Menu () {
    const [pokemones, setPokemones]= useState([]);
    const [busqueda, setBusqueda]=useState([]);
    const [orden, setOrden]=useState("id");
    const getPokemones = async() => {
        await fetch("http://localhost:4000/pokemones", {mode:'cors'})
        .then(response=>response.json())
        .then((pokemones)=>{
            setPokemones(pokemones);
            console.log(pokemones)
        })
        .catch((error)=>{alert("hola",error)})
    }

    useEffect(()=>{
        getPokemones()
    },[])
    
    

    
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