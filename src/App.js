import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Error from './Components/Error'

function App() {
  
  const [city, saveCity] = useState('');
  const [country, saveCountry] = useState('');
  const [error, saveError] = useState(false);
  
  
  
  const dataConsult = data => {
    //validate if data its true 
   
    if (data.city === '' || data.country === '') {
      saveError(true);
      return; 
    }

    //and if city and country are existing, save them 
    saveCity(data.city);
    saveCountry(data.country);
    saveError(false);
  }
  
  //if... 
  let component;
  if(error){
    //show it
    component = <Error message= 'Ambos cambos son necesarios'/>

  }else{
    //show weather
    component=null;
  }


  return (
    <App>
      
      <Header/>
        
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form
                  dataConsult={dataConsult}
              />
              
            </div>

            <div className="col s12 m6">
                {component}
            </div>
          </div>
        </div>
      </div>
    </App>
  );
}

export default App;
