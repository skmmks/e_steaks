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
  render() {
    return <React.Fragment></React.Fragment>;
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
