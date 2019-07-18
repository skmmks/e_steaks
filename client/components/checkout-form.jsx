import React from 'react';
export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      address: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleCreditCard = this.handleCreditCard.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleReturnButton = this.handleReturnButton.bind(this);
  }
  handleReturnButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.placeOrder(this.state);
  }
  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleCreditCard(e) {
    this.setState({
      creditCard: e.target.value
    });
  }
  handleAddress(e) {
    this.setState({
      address: e.target.value
    });
  }
  render() {
    const priceOfCartItems = this.props.cartState.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.price), 0);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='container'>
          <div className='col'>
            <h1 className='mt-3'>Checkout</h1>
            <h5 className='text-muted mb-5'>Order Total ${(priceOfCartItems / 100).toFixed(2)}</h5>
            <h5>Name</h5>
            <input placeholder='Your Name Here' className='form-control mb-3' type='text' onChange={this.handleName} value={this.state.name}/>
            <h5>Credit Card</h5>
            <input placeholder='XXXX-XXXX-XXXX' className='form-control mb-3' type='text' onChange={this.handleCreditCard} value={this.state.creditCard}/>
            <h5>Shipping Address</h5>
            <textarea placeholder='Your Address Here' className='form-control mb-3' type='text' onChange={this.handleAddress} value={this.state.address}></textarea>
            <div>
              <button className='ml-2 col-5 btn btn-primary' onClick={this.handleReturnButton}>Return to Catalog</button>
              <input className='ml-2 col-5 btn btn-warning float-right' type="submit"/>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
