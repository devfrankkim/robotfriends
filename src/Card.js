import React from 'react';

function Card({id, name ,email}){
    return (
        <>
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <h1 >Robots Friends</h1>
                <img src={`https://robohash.org/${id}}?200x200`} alt="robots" ></img>                              
                <div> {name} </div>    
                <div>{email}</div>                          
            </div>                                   
        </>
        );
    }
  
  export default Card;
  