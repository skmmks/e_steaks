import React from 'react';
import { CardImg, Button, Col, Row, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.item,
      quantity: 1
    };
    this.handleReturnButton = this.handleReturnButton.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment(e) {
    e.preventDefault();
    this.setState({ quantity: this.state.quantity + 1 });
  }
  decrement(e) {
    e.preventDefault();
    if (this.state.quantity === 1) {
      return;
    }
    this.setState({ quantity: this.state.quantity - 1 });
  }
  handleReturnButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  handleAddToCart(e) {
    e.preventDefault();
    this.props.addToCart(this.state.product, this.state.quantity);
  }
  componentDidMount() {
    const paramID = this.props.params.id;
    fetch(`/api/products.php?id=${paramID}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          product: res
        });
      });
  }
  render() {
    if (!this.state.product) return null;
    return (
      <div>
        <div onClick={this.handleReturnButton} className={'btn btn-primary ml-2'}>
          Back to Catalog
        </div>
        <div className='row'>
          <div className='col-lg-5 ml-5 mt-2'>
            <img height='400px' width='100%' src={this.state.product.image} alt='Product Image' />
          </div>
          <div className='col-lg-4'>
            <h1>{this.state.product.name}</h1>
            <h4 className='text-muted'>${(this.state.product.price / 100).toFixed(2)}</h4>
            <h5>{this.state.product.shortDescription}</h5>
            <div>
              <button onClick={this.decrement}>&mdash;</button>
              <input value={this.state.quantity} readOnly />
              <button onClick={this.increment}>&#xff0b;</button>
            </div>
            <div className='btn btn-warning mt-4' onClick={this.handleAddToCart}>
              Add To Cart
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col mx-5'>{this.state.product.longDescription}</div>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
