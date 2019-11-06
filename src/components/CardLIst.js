import React from 'react'
import Card from './newCard';


const CardList = ({ users }) => {
    const cardCompoArr = users.map((user, i) => {
        return(
        <Card
            key={users[i].id}
            id={users[i].id}
            name={users[i].name}
            email={users[i].email}            
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