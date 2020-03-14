import React from 'react';
import CartSummaryItem from './cart-summary-item';
import { Col, Container, Row } from 'reactstrap';
import ReactTooltip from 'react-tooltip';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.handleReturnButton = this.handleReturnButton.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }
  handleReturnButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  handleCheckout(e) {
    e.preventDefault();
    this.props.setView('checkout', {});
  }
  render() {
    // if (this.props.cartState.length === 0) {
    //   return (
    //     <div>
    //       <h1>
    //         <div className='btn btn-primary ml-2' onClick={this.handleReturnButton}>
    //           Return to Catalog
    //         </div>
    //         Your cart is empty
    //       </h1>
    //     </div>
    //   );
    // }
    // const priceOfCartItems = this.props.cartState.reduce(
    //   (accumulator, currentValue) => accumulator + parseInt(currentValue.price),
    //   0
    // );
    // const itemsInCart = this.props.cartState.map((cartItem, index) => (
    //   <CartSummaryItem key={index} cartItem={cartItem} />
    // ));
    // return (
    //   <div className='container'>
    //     <div className='btn btn-primary ml-2' onClick={this.handleReturnButton}>
    //       Return to Catalog
    //     </div>
    //     <h3 className='mt-5'>My Cart</h3>
    //     {itemsInCart}
    //     <h3 className='mt-4'>
    //       Total Price: ${(priceOfCartItems / 100).toFixed(2)}
    //       <div className='btn btn-primary ml-2 mr-5 float-right' onClick={this.handleCheckout}>
    //         Continue to Checkout
    //       </div>
    //     </h3>
    //   </div>
    // );
  }
}
