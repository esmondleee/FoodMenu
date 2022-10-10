import React from 'react';
import Card from './Card';


const CardList = ({robots}) => { // an object is passed in as an argument, and is destructed into a var robots
    const cardArray = robots.map((users,i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} username={robots[i].username} email={robots[i].email} />
    })
    
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;