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
    const itemsInCart = this.props.cart.map((cartItem, cartIndex) => (
      <CartSummaryItem
        key={cartIndex}
        cartItem={cartItem}
        update={this.props.update}
        removeFromCart={this.props.removeFromCart}
        setView={this.setView}
      />
    ));
    let totalOrders = this.props.cart.reduce((total, product) => {
      total += product.quantity;
      return total;
    }, 0);
    const totalPrice = this.props.cart.reduce((accumulator, currentValue) => {
      accumulator += currentValue.price * currentValue.quantity;
      return accumulator;
    }, 0);
    const cartTotal = parseFloat(totalPrice) / 100;
    return (
      <Container>
        <Row>
          <Col sm='7'>
            <div>Order Quantities: {totalOrders}</div>
            <div>{itemsInCart}</div>
          </Col>
          <Col sm='5'>
            <div>Summary</div>
            <div>
              SubTotal: <span>{totalPrice}</span>
            </div>
            <div>Shipping</div>
            <div>Total Price: {cartTotal} </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
