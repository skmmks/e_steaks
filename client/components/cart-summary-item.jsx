import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className='col'>
      <div className='row'>
        <div>{props.image}</div>
        <div>{props.name}</div>
        <div>{props.price}</div>
        <div>{props.shortDescription}</div>
      </div>
    </div>
  );
}
