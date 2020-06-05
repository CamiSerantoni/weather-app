import React from 'react';

function Error({message}) {
    return(
        <div className=" card panel red darken-3">
            {message}
        </div>
    )
}

export default Error;