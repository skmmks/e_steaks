import React from 'react';
import CartSummaryItem from './cart-summary-item';
import { Col, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactTooltip from 'react-tooltip';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.handleReturnButton = this.handleReturnButton.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  handleReturnButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  handleCheckout(e) {
    e.preventDefault();
    this.props.setView('checkout', {});
  }
  toggle() {
    this.setState(previousState => ({
      modal: !previousState.modal
    }));
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
    let cartTotal = totalPrice > 5000 ? parseFloat(totalPrice) / 100 : parseFloat(totalPrice + 799) / 100;
    let shippingConditionalDOM = totalPrice > 5000 ? <span>Free</span> : <span>$7.99</span>;
    if (!this.props.cart.length) {
      return (
        <div>
          <hr />
          <h1>Shopping Cart Is Empty</h1>
          <p>You have no items in your shopping cart</p>
          <p>
            Click{' '}
            <a href='#' onClick={this.handleReturnButton}>
              here
            </a>{' '}
            to continue shopping
          </p>
          <hr />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <Container>
            <Row>
              <Col>
                <h1>Shopping Cart</h1>
              </Col>
            </Row>
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
            <Row>{itemsInCart}</Row>
            <hr />
            <Row>
              <Col sm='8'>
                <div>
                  Do you have a promo code or a gift card?{' '}
                  <div>
                    <Button color='warning' onClick={this.toggle}>
                      Click Here
                    </Button>
                  </div>
                </div>
              </Col>
              <Col sm='4'>
                <div>Order Total</div>
                <br />
                <div>
                  SubTotal: <span>${parseFloat(totalPrice) / 100}</span>
                </div>
                <div>Shipping: {shippingConditionalDOM}</div>
                <div>Grand Total: ${cartTotal} </div>
                <Button color='success' size='lg' block onClick={this.handleCheckout}>
                  Checkout
                </Button>
                <Button
                  className='text-white'
                  data-tip
                  data-for='tooltip-cart2'
                  color='primary pointer-hover'
                  size='lg'
                  disabled
                  block
                >
                  <i className='fab fa-paypal' data-tip data-for='tooltip-cart2'>
                    {' '}
                    Continue with Paypal
                  </i>
                </Button>
                <ReactTooltip id='tooltip-cart2' place='right' type='dark' effect='solid'>
                  <span className='font-weight-bold'>This Option Is Currently Unavailable</span>
                </ReactTooltip>
              </Col>
            </Row>
          </Container>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>
              <div>Add Coupon</div>
            </ModalHeader>
            <ModalBody>
              <input type='text' />
            </ModalBody>
            <ModalFooter>
              <Button onClick={this.toggle}>Apply</Button>
              <Button onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </React.Fragment>
      );
    }
  }
}
