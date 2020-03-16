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
    const totalPrice = this.props.cart.reduce((accumulator, currentValue) => {
      accumulator += currentValue.price * currentValue.quantity;
      return accumulator;
    }, 0);
    const itemsInCart = this.props.cart.map((cartItem, cartIndex) => (
      <CartSummaryItem
        key={cartIndex}
        cartItem={cartItem}
        update={this.props.update}
        removeFromCart={this.props.removeFromCart}
        setView={this.props.setView}
      />
    ));
    const emptyCartConditional = this.props.cart.length ? (
      itemsInCart
    ) : (
      <div>
        <h1>Shopping Cart Is Empty</h1>
        <p>You have no items in your shopping cart</p>
        <p>
          Click{' '}
          <a href='#' onClick={this.handleReturnButton}>
            here
          </a>{' '}
          to continue shopping
        </p>
      </div>
    );
    let totalOrders = this.props.cart.reduce((total, product) => {
      total += product.quantity;
      return total;
    }, 0);
    const cartTotal = parseFloat(totalPrice) / 100;
    return (
      <Container>
        <Row>
          <Col sm='7'>Product</Col>
          <Col className='text-center' sm='2'>
            Price
          </Col>
          <Col className='text-center' sm='2'>
            Quantity
          </Col>
          <Col className='text-center' sm='1'>
            SubTotal
          </Col>
        </Row>
        <hr />
        <Row>{emptyCartConditional}</Row>
        <hr />
        <Row>
          <Col sm='8'>
            <div>
              Shopping Cart
              {totalOrders}
            </div>
          </Col>
          <Col sm='4'>
            <div>Order Total</div>
            <div>
              SubTotal: <span>{totalPrice}</span>
            </div>
            <div>Shipping</div>
            <div>Grand Total: ${cartTotal} </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
