import React from 'react'
import Card from './newCard';


const CardList = ({ robots }) => {
    const cardCompoArr = robots.map((user, i) => {
        return(
        <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}            
        />
        ) 
    })
    return(
    <div>
       {cardCompoArr} 
    </div>
    )
}

export default CardList;