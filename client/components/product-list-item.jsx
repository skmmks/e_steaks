import React from 'react';

function ProductListItem(props) {
  return (
    <React.Fragment>
      <img src={props.image} alt={props.name}/>
      <span>{props.name}</span>
      <span>{props.price}</span>
      <span>{props.shortDesc}</span>
    </React.Fragment>
  )
}

export default ProductListItem;
