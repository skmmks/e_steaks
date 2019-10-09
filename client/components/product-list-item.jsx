import React from 'react';

function ProductListItem(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <h1>Product Price</h1>
      <h1>Product Description</h1>
    </React.Fragment>
  )
}

export default ProductListItem;
