import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.handleReturnButton = this.handleReturnButton.bind(this);
  }
  handleReturnButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  render() {
    const priceOfCartItems = this.props.cartState.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    const itemsInCart = this.props.cartState.map((cartItem, index) => <CartSummaryItem key={index} cartItem={cartItem}/>);
    return (
      <div>
        <div className='btn btn-success' onClick={this.handleReturnButton}>Return to Catalog</div>
        <h3>My Cart</h3>
        {itemsInCart}
        <h3>${((priceOfCartItems) / 100).toFixed(2)}</h3>
      </div>
    );
  }
}
