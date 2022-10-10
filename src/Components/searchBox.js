import React from 'react';

const searchBox = ({searchField, searchChange}) => {
    return(
        <div>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots' 
                onChange={searchChange} />
        </div>
    )
}

export default searchBox;