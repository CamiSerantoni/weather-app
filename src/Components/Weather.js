import React from 'react';
import place from '../images/backPlace.jpg'
import './CSSFolder/Weather.css'
import velWind from '../images/wind.png';
import hot from '../images/hot.png';
import cold from '../images/cold.png';
import feels from '../images/feels_like.png';
import humidity from '../images/humidity.png';


function Clima({resultado}) {
    console.log(resultado);
    //extraer valores
    const {name, main, wind} = resultado;
    
    if(!name) return null;

    //restar grados kelvin
    const kelvin = 273.15;


    return(
        <div className=" back__image">
            <img src={place} alt="imagen de las variaciones del tiempo"></img>
            <div className="text"> 
            <div className="weather__Place">     
            <h2 className="weather__name"> {name} </h2>
            <p className="temperatura">
                {parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>   </p>
        
            </div>
            <div className="dataPlace">
                <p className="pos_Place"><img className="icon"  src={hot} alt="icono de temperatura minima o baja "></img>Temperatura Máxima: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                <p className="pos_Place"><img className="icon"  src={cold} alt="icono de alta temperatura o máxima"></img>Temperatura Mínima: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p> 
                <p className="pos_Place"><img className="icon"  src={feels} alt="icono de sensación temperatura "></img>Sensación Térmica: {parseInt(main.feels_like - kelvin, 10)} &#x2103;</p>
                <p className="pos_Place"><img className="icon"  src={humidity} alt="icono de humedad "></img>Humedad: {parseInt(main.humidity)}%</p>
                <p className="pos_Place"> <img className="icon"  src={velWind} alt="velocidad del viento"></img> Velocidad del viento: {wind.speed} </p>
               
            </div>
            </div>
        </div>



    )
}

export default Clima;