import React from 'react'

//rfce
const SearchBox = ({searchChange}) => {
    console.log(searchChange);
    return (
        <>
            <input 
                className="ps3 ba b--green bg-lightest-blue" 
                type="search" 
                placeholder="search robots" 
                onChange = {searchChange}
            />
        </>
    )
}

export default SearchBox