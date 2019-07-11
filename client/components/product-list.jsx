import React from 'react';
import ProductListItem from './product-list-item';

function ProductList(props) {
  const merch = props.products.map(merch =>
    <ProductListItem key={merch.id} merch={merch}/>
  );
  return (
    <div className='container'>
      <div className='row'>
        {merch}
      </div>
    </div>
  );
}
export default ProductList;
