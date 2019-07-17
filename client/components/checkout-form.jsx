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
    return (
      <div>
        <h3>Name<input type="text"/></h3>
        <h3>Credit Card<input type="text"/></h3>
        <h3>Shipping Address<input type="text"/></h3>
      </div>
    );
  }
}
