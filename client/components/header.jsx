import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='col'>
        <div className="row">
          <h2 className='col-10'> <i className="fas fa-store-alt"></i> The Shop</h2>
          <p className='mt-2 ml-5'>{this.props.cartItemCount} items <i className="fas fa-shopping-cart"></i></p>
        </div>
      </div>
    );
  }
}
