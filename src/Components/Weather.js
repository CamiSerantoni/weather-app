import React from 'react';
import place from '../images/backPlace.jpg'
import './CSSFolder/Weather.css'


function Clima({resultado}) {
    console.log(resultado);
    //extraer valores
    const {name, main, wind} = resultado;
    
    if(!name) return null;

    //restar grados kelvin
    const kelvin = 273.15;


    return(
        <div className=" back__image">
            <img src={place} alt="imagen de las variaciones del tiempo" className=""></img>
            <div className="text"> 
            <div className="">
            <h2 className="weather__container">  El  clima de {name} es:</h2>
            <p className="temperatura">
                {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>   
            </p>
            </div>
            <p>Temperatura Máxima: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
            <p>Temperatura Mínima: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
            <p> Velocidad del viento: {wind.speed} </p>
            </div>
        </div>



    )
}

export default Clima;