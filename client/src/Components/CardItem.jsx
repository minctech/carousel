import React from 'react';

const CardItem = (props) => {
  return (
    <div id={props.listing._id} className="card">
    <img src={props.listing.image} alt={props.listing.location} width="300" heigth="200"/>
    <div className="details">
     <span className="index">{props.listing.listingType} {props.listing.price}</span>
     <p className="location">
     {props.listing.location}<br />
     {props.listing.name}<br />
     </p>
   </div>
  </div>
  )
}

export default CardItem;