
import React, { Fragment } from 'react';

const Card = ({ name, email, id }) => {
    return (
        <Fragment>
            <div className="bg-washed-red br4 pd3 grow dib ma5 bw2 shadow-5 tc">
                <img src={`https://robohash.org/${id}?200x200`} alt="photos"/>
                <h2>{name}</h2>
                <p>{email}</p> 
            </div>
        </Fragment>
    )
}

export default Card;