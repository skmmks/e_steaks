import React from 'react';

export default class CartSummaryItem extends React.Component {
  render() {
    return (
      <div className='col'>
        <div className='row'>
          <div><img src={this.props.cartItem.image} alt="item of image"/></div>
          <div>{this.props.cartItem.name}</div>
          <div>{this.props.cartItem.price}</div>
          <div>{this.props.cartItem.shortDescription}</div>
        </div>
      </div>
    );
  }
}
