import React from "react";

 const Header = (props) => {

    const cambiarOrden = (orden) => {
        console.log(orden)
        props.setOrden(orden);
    }

    return(
    <div className="logo">
        < img  className="imagenLogo" src= "https://img1.freepng.es/20180705/rzq/kisspng-computer-icons-eye-clip-art-pokeball-5b3e30eaa1ae73.8574200515308024106623.jpg"/>
        <h1>  Pokedéx</h1> 
        <div>
        <img onClick={() => cambiarOrden("name")} className="imgBoton" src="https://e7.pngegg.com/pngimages/724/928/png-clipart-arrow-computer-icons-symbol-down-arrow-angle-triangle-thumbnail.png"></img>
        <img onClick={() => cambiarOrden("id")} className="imgBoton" src="https://e7.pngegg.com/pngimages/16/632/png-clipart-number-sign-hashtag-file-formats-stress-free-angle-image-file-formats-thumbnail.png"></img>
        </div>
    </div>

    )

 }
 export default Header

