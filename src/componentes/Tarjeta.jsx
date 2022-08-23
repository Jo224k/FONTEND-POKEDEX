import React from "react";
import { Link } from "react-router-dom";


const Tarjeta=(props) => {



    return(
    <>
        <div style={{width:"100%"}} className= {` ${props.infoPokemon.types && props.infoPokemon?.types[0]?.type?.name}`}>
            
            <div className="nameTarjeta">
             <Link  to="/">
              <i className="fa-solid fa-arrow-left"></i>
             </Link>
             <h1 style={{color:"white"}}>{props.infoPokemon.name}</h1>
             <h4 style={{color:"white"}}>#{props.infoPokemon.id}</h4>
            </div> 
          
            <img src={props.infoPokemon.image} className="imagenTarjeta"></img>

            <div className="containerInfo">
                <div className={`tipoPokemon ${props.infoPokemon.types && props.infoPokemon?.types[0]?.type?.name}`}>
                    <h3 style={{color:"white"}}>{props.infoPokemon.types && props.infoPokemon?.types[0]?.type?.name}</h3>
                </div>  
                  <h3>About</h3>

                <div className="datosPokemon">
                    <div> 
                        <p>4,0kg</p>
                        <p>Weight</p>
                    </div>
                    <div className="divHeight"> 
                        <p>0,4m</p>
                        <p>Height</p>
                    </div>
                    <div> 
                        <p>Synchronize</p>
                        <p>Moves</p>
                    </div>
                </div>  
                
                <p style={{color:"black"}}>When viewed through a microscope, this Pokémon's short, fine, delicate hair can be seen.</p>
                
                <h2>Base Stats</h2>
                
                <div className="estadisticasContainer">
                 <div className="listaAtributo">
                   <ul style={{listStyle:"none"}}>
                    <li>HP</li>
                    <li>ATK</li>
                    <li>DEF</li>
                    <li>SATK</li>
                    <li>SDEF</li>
                    <li>SPD</li>
                   </ul>
                 </div> 

                 <div className="listaPorcentaje">
                   <ul style={{listStyle:"none"}}>
                    <li>50</li>
                    <li>20</li>
                    <li>70</li>
                    <li>35</li>
                    <li>80</li>
                    <li>65</li>
                   </ul>
                 </div>
                    
                 <div className="barrasTarjeta">
                     <progress className="barra" value="50" max="100">50 %</progress>
                     <progress className="barra" value="20" max="100">20 %</progress>
                     <progress className="barra" value="70" max="100">70 %</progress>
                     <progress className="barra" value="35" max="100">35 %</progress>
                     <progress className="barra" value="80" max="100">80 %</progress>
                     <progress className="barra" value="65" max="100">65 %</progress>
                 </div>
                </div> 
            </div>



        </div>
    </>
    )
    }






export default Tarjeta;
