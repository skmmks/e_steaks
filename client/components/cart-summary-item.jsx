import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Col, Container, Row } from 'reactstrap';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.decrementItem = this.decrementItem.bind(this);
    this.incrementItem = this.incrementItem.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleSetView = this.handleSetView.bind(this);
  }
  toggle() {
    this.setState(previousState => ({
      modal: !previousState.modal
    }));
  }
  incrementItem(e) {
    e.preventDefault();
    this.props.update(this.props.cartItem.id, 'increment');
  }
  decrementItem(e) {
    e.preventDefault();
    if (this.props.cartItem.quantity === 1) {
      return;
    }
    this.props.update(this.props.cartItem.id, 'decrement');
  }
  removeFromCart(e) {
    e.preventDefault();
    this.props.removeFromCart(this.props.cartItem.id);
    this.toggle();
  }
  handleRemove(e) {
    e.preventDefault();
    this.toggle();
  }
  handleSetView(e) {
    e.preventDefault();
    console.log(this.props.cartItem.id);
    this.props.setView('details', { id: this.props.cartItem.id });
  }
  render() {
    return (
      <React.Fragment>
        <Container className='d-flex mt-2'>
          <Row>
            <Col sm='3'>
              <span className='pointer-hover' onClick={this.handleRemove}>
                <i className='far fa-times-circle'></i>
              </span>
              <img
                onClick={this.handleSetView}
                className='pointer-hover col-sm-9'
                src={this.props.cartItem.image}
                alt={this.props.cartItem.name}
              />
            </Col>
            <Col sm='4'> {this.props.cartItem.name}</Col>
            <Col className='text-center' sm='2'>
              ${parseFloat(this.props.cartItem.price) / 100}
            </Col>
            <Col className='text-center' sm='2'>
              <i className='fas fa-minus pointer-hover mr-2 fa-xs' onClick={this.decrementItem}></i>
              {this.props.cartItem.quantity}
              <i className='fas fa-plus pointer-hover ml-2 fa-xs' onClick={this.incrementItem}></i>
            </Col>
            <Col className='text-center' sm='1'>
              ${parseFloat(this.props.cartItem.price * this.props.cartItem.quantity) / 100}
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <h1>Remove from Cart?</h1>
          </ModalHeader>
          <ModalBody>
            <img src={this.props.cartItem.image} className='col-sm-5 mx-auto' alt='' />
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Leave in cart</Button>
            <Button onClick={this.removeFromCart}>Remove from cart</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
