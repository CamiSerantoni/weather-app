import React, {useState} from 'react';

function Form({dataConsult}) { 

    //Changing the state from the component 
    const [search, saveSearch]=useState({
        ciudad: '',
        pais: ''
    })

    const handleChange = e => {
        //Change the state 
        saveSearch({
            ...search,
            [e.target.name] : e.target.value

        });
        console.log(search)
    }

    const consultWeather = e => {
        e.preventDefault();

        dataConsult(search)
    }



    return(
        <form
        onSubmit={consultWeather}
        
        >
            <div className="input-field col 12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad"> Ciudad a consultar: </label>
            </div>

            <div className="input-field col s12">
                <select onChange={handleChange} name="pais"> 
                    <option value=""> Selecciona un país </option>
                    <option value="CL"> Chile
                    </option>  
                    <option value="LK"> Sri Lanka
                    </option> 
                    <option value="MX"> México
                    </option>
                    <option value="AR"> Argentina
                    </option>
                    <option value="PE"> Perú
                    </option>
                    <option value="BR"> Brasil
                    </option>  
                    <option value="CO"> Colombia
                    </option>
                    <option value="ES"> España
                    </option>
                    <option value="US"> Estados Unidos
                    </option>   
                </select>

            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" />
            </div>   
        </form>

    ) 
}

export default Form; 