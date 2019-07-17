import React from 'react';
export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: null,
      address: ''
    };
  }
  render() {
    const priceOfCartItems = this.props.cartState.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.price), 0);
    return (
      <div>
        <h1>Checkout</h1>
        <h3>
          Order Total ${(priceOfCartItems / 100).toFixed(2)}
        </h3>
        <h3>Name<input type="text"/></h3>
        <h3>Credit Card<input type="text"/></h3>
        <h3>Shipping Address<input type="text"/></h3>
      </div>
    );
  }
}
