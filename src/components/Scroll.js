import React from 'react'

const Scroll = (props) => {    
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '600px'}}>
            <h1>{props.children}</h1>
        </div>
    )
}

export default Scroll

  