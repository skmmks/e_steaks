import React from 'react';

export default class CheckoutSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.product.image);
    return (
      <React.Fragment>
        <div>
          <div>
            <img className='col-sm-5 mx-auto' src={this.props.product.image} alt={this.props.product.name} />
            {this.props.product.name}${(this.props.product.price / 100).toFixed(2)}
            <h1>{this.props.product.quantity}</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
