import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
    console.log('button was clicked');
    e.preventDefault();
    this.props.removeFromCart(this.props.cartItem.id);
    this.toggle();
  }
  handleRemove(e) {
    e.preventDefault();
    this.toggle();
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <div>{this.props.cartItem.name}</div>
          <div>{this.props.cartItem.price}</div>
          <img className='col-sm-5 mx-auto' src={this.props.cartItem.image} alt={this.props.cartItem.name} />
          <div className='h5 mb-3 noselect'>
            Quantity: <i className='fas fa-minus pointer-hover mr-2' onClick={this.decrementItem}></i>
            {this.props.cartItem.quantity}
            <i className='fas fa-plus pointer-hover ml-2' onClick={this.incrementItem}></i>
          </div>
          <a href='#' className='alert-link description-font' onClick={this.handleRemove}>
            Remove
          </a>
        </div>
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
  // render() {
  //   const itemPrice = (this.props.cartItem.price / 100).toFixed(2);
  //   return (
  //     <div className='col'>
  //       <div className='card-group h-100'>
  //         <div className='ml-5 col-4'><img height='200px' width='auto' src={this.props.cartItem.image} alt="item of image"/></div>
  //         <h1 className='col-5'>{this.props.cartItem.name}
  //           <h3 className='col my-3' >${itemPrice}</h3>
  //           <h6 className='col'>{this.props.cartItem.shortDescription}</h6>
  //         </h1>
  //       </div>
  //     </div>
  //   );
  // }
}
