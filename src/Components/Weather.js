import React from 'react';
import back from '../images/background.jpg'
import './CSSFolder/Weather.css'


function Clima({resultado}) {
    console.log(resultado);
    //extraer valores
    const {name, main, wind, weather,sys} = resultado;
    
    if(!name) return null;

    //restar grados kelvin
    const kelvin = 273.15;


    return(
        <div className="card-panel white col s12">
            <div className="black-text"> 
            <h2> El  clima de {name} es:</h2>
            <img src={back} alt="imagen de las variaciones del tiempo" className="back__image"></img>
            
            <p className="temperatura">
                {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
            </p>
            <p>Temperatura Máxima: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
            <p>Temperatura Mínima: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
            <p> {wind.speed} </p>
            <p>{main.feels_like}</p>
            <p>{sys.country}</p>
            <p>{(weather.description)}</p>
            </div>
        </div>



    )
}

export default Clima;