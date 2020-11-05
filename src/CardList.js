import React from 'react'
import Card from './Card'

// props is an Object

// functional component -> props (object) 
const CardList = (props) => {            
    console.log('CardList')
    return (       
        <>
            {
            props.robots.map((user, index) => {
                return (
                    <Card 
                        key={user.id} 
                        id={user.id} 
                        name={user.name} 
                        email ={user.email}
                    />
                )
            })            
            }
        </>
    )
}



export default CardList