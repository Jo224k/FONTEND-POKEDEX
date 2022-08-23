import React from "react";
 
const Nav = (props) => {

  const onChange = (event) => {
    props.setBusqueda(event.target.value);
  }

    return(
        <form>
        <nav>
        <input className="buscador" type={'text'} placeholder ={'Buscar'} onChange={onChange}></input>  
        </nav>
        </form>
    )


 }
 export default Nav