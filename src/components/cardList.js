import React from "react";

import Card from './card';

const CardList = ({robots}) => {
    const cardArray = robots.map((user, i) => {     // user is the very first array (only one) and then i for id number?
        return <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
            />
    })
    return cardArray.length === 0 ?
        <h1>YOU FOUND NO ROBOTS!</h1> :
        (<div>{ cardArray }</div>);
}

export default CardList;