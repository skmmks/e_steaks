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
        <div>
          <h1>Checkout</h1>
          <p className='text-muted'>Order Total ${(priceOfCartItems / 100).toFixed(2)}</p>
        </div>
        <div>
          <h3>Name <br/> <input type='text' onChange={this.handleName} value={this.state.name}/></h3>
          <h3>Credit Card <br/><input type='text' onChange={this.handleCreditCard} value={this.state.creditCard}/></h3>
          <h3>Shipping Address <br/><textarea type='text' onChange={this.handleAddress} value={this.state.address}></textarea></h3>
        </div>
        <div>
          <div className='btn btn-primary ml-2 col-3' onClick={this.handleReturnButton}>Return to Catalog</div>
          <input type="submit" className='btn btn-success col-3'/>
        </div>
      </form>
    );
  }
}
