import React from 'react';

const searchBox = ({searchfield, searchChange}) => {   // onSearchChange function defined in App.js is passed in //
    return(
        <div>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange={searchChange} // everytime the searchbox changes (onChange) triggered, calls the searchChange function (which is a prop)
              
                // note that the syntax is searchChange to call the searchChange function
                // searchChange function, which is a prop, is the onSearchChange function defined in App.js
            />
        </div>
    )
}

export default searchBox;