import React from 'react';
// import ReactDOM from 'react-dom/client';

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='a robot photo' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;