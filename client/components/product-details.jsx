import React from 'react';
import { CardImg, Button, Col, Row, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.item,
      quantity: 1,
      modal: false
    };
    this.handleReturnButton = this.handleReturnButton.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  handleReturnButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleAddToCart(e) {
    e.preventDefault();
    this.toggle();
    this.props.addToCart(this.state.product, this.state.quantity);
  }
  handleContinueClick(e) {
    e.preventDefault();
    this.setState({ quantity: 1 });
    this.toggle();
    this.props.setView('catalog', {});
  }
  handleCartClick(e) {
    e.preventDefault();
    this.setState({ quantity: 1 });
    this.toggle();
    this.props.setView('cart', {});
  }
  decrement(e) {
    e.preventDefault();
    if (this.state.quantity === 1) {
      return;
    }
    this.setState({ quantity: this.state.quantity - 1 });
  }
  increment(e) {
    e.preventDefault();
    this.setState({ quantity: this.state.quantity + 1 });
  }
  render() {
    if (!this.state.product) return null;
    return (
      <React.Fragment>
        <Container className='mt-5 mb-4'>
          <Row>
            <Col sm='5'>
              <CardImg width='100%' src={this.state.product.image} alt={this.state.product.name} />
            </Col>
            <Col sm='5' className='m-auto'>
              <div>
                <div className='productDetailsTitle'>{this.state.product.name}</div>
                <div className='productDetailsPrice'>{'$' + (this.state.product.price / 100).toFixed(2)}</div>
                <div className='h4 mb-4 noselect'>
                  <i className='fas fa-minus pointer-hover mr-2 fa-xs' onClick={this.decrement}></i>
                  {this.state.quantity}
                  <i className='fas fa-plus pointer-hover ml-2 fa-xs' onClick={this.increment}></i>
                </div>
                <Button className='addToCartButton' onClick={this.handleAddToCart}>
                  Add To Cart
                </Button>
                <br />
                {/* <Button className='mt-2' onClick={this.handleReturnButton}>
                  Return To Catalog
                </Button> */}
              </div>
              <div className='productDetailsDescription'>{this.state.product.longDescription}</div>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Added to cart</ModalHeader>
          <ModalBody>
            <div>
              <img src={this.state.product.image} alt={this.state.product.name} className='col-sm-5 mx-auto' />
              <div className='col-sm-7'>
                <div>{this.state.product.name}</div>
                <div className='h6 description-font text-muted'>
                  ${(this.state.product.price / 100).toFixed(2)} x {this.state.quantity} = $
                  {((this.state.product.price / 100) * this.state.quantity).toFixed(2)}
                </div>
                <div className='h5 mb-3'>Quantity: {this.state.quantity}</div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleContinueClick}>Continue Shopping</Button>
            <Button onClick={this.handleCartClick}>Go To Cart</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
