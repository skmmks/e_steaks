import React from 'react';

function ProductListItem(props) {
  return (
    <div className="col-sm-4">
      <div className="card-group h-100">
        <div className="card mt-3">
          <img src={props.image} alt={props.name} className="img-fluid mt-3" />
          <div className="mt-3 font-weight-bold">{props.name}</div>
          <div className="mt-2">{'$' + ((props.price) / 100).toFixed(2)}</div>
          <div className="mt-2">{props.shortDesc}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductListItem;
