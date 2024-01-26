import React from "react";
import './card.styles.css'

export const Card = ({monster}) => {
    const {id, name, email,phone} = monster;

    return (
        //container for the contact card component, will show image, name, email, and phone number
        <div className = 'card-container'> 
            <img alt = 'monster' src = {`https://robohash.org/${id}?set=set2&size =15x15`}/>
            <h2> {name} </h2>
            <p> {id} </p>
            <p> {email} </p>
            <p> {phone} </p>
        </div>
    )
};

//export default Card; //or this to export