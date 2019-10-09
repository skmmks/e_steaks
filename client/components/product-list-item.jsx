import React from 'react';

function ProductListItem(props) {
  return (
    <React.Fragment>
      <div><img className="catalogImg" src={props.image} alt={props.name}/></div>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>{props.shortDesc}</div>
    </React.Fragment>
  )
}

export default ProductListItem;
