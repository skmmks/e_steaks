import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetView = this.handleSetView.bind(this);
  }
  handleSetView(e) {
    e.preventDefault();
    this.props.setView('cart', {});
  }
  render() {
    return (
      <div className='col'>
        <div className="row">
          <div className="col text-right text-white bg-dark">
            <h5>Order Now To Recieve %20 Off!</h5>
          </div>
        </div>
        <div className="row">
          <h2 className='col-10'> <i className="fas fa-store-alt"></i> The Steak Shop</h2>
          <p className='mt-2 ml-5' onClick={this.handleSetView}>{this.props.cartItemCount} items <i className="fas fa-shopping-cart"></i></p>
        </div>
      </div>
    );
  }
}
