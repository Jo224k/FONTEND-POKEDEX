import React from "react";
import Pokemon from "./Pokemon";


const Catalogo =(props) => {
    return (
    <div className="catalogo">   
    {props.listaPokemones?.map((pokemon)=>(
        <Pokemon data={pokemon}/>
    ))
    }
    </div>
)
}
export default Catalogo;