import React from "react";
import { Link } from "react-router-dom";

const Pokemon=(props)  => {
    
    return(
           
         <div className= {`pokemon ${props.data.types[0].type.name}`}>
         <Link to={`/Detalles/${props.data.id}`} className= {`Pokemon ${props.data.types[0].type.name}`}>
         <div className="id" >#0{props.data.id} </div> 
         <div className="imgPokemon"><img className="image" src={props.data.image}/></div>
         <div className="name">
            <h3>{props.data.name}</h3></div>
         </Link>
         </div>
       
    )
}
export default Pokemon