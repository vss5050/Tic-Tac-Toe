 import React from 'react';

 const Square = (props) =>{

    return (
        <div onClick={props.onclick} className="square">
            <h1>{props.val}</h1>
        </div>
    );
 };

 export default Square;