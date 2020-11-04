import React from 'react';

function Card({email, id, name}){
    return (
        <>
            <h1 >Robo Friends</h1>
            <img src={`https://robohash.org/${id}}?200x200`} alt="robots" ></img>                              
            <div> {name} </div>    
            <div>{email}</div>                           
        </>
        );
    }
  
  export default Card;
  