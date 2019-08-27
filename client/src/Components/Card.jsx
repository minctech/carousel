import React from 'react';
import CardItem from './CardItem.jsx';

const Card = (props) => {
  if (props.listings.length > 0) {
    return (
      <div>
        {props.listings.map((listing, i) =>
        <CardItem listing={listing} key={i}
        />
      )}
      </div>
    )
  }
  return <div>

  </div>
}

export default Card;
