import React from 'react';
import logo from "../../Iconos e imagenes/Pokeball.png";
import "./Title.css";

function Title() {
    return (
        <div className='bigdiv'>
            <div className='logodiv'>
                <img id="logoimage" src={logo} alt="pokeball" />
            </div>
            <div className='textdiv'>
                <p id="text"> Pokédex </p>
            </div>
        </div>
    )
}

export default Title