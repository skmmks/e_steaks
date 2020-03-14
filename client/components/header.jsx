import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetView = this.handleSetView.bind(this);
  }
  handleSetView(e) {
    e.preventDefault();
    this.props.setView('cart', {});
  }
  render() {
    let orders = this.props.cartItemCount.reduce((total, product) => {
      total += product.quantity;
      return total;
    }, 0);
    return (
      <div className='col'>
        <div className='row'>
          <div className='col text-center text-white bg-dark'>
            <h5>FREE SHIPPING ON ORDERS $49 OR MORE</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col text-right headerBar'>
            Login | Create Account <i className='fas fa-shopping-cart' onClick={this.handleSetView}></i> ({orders})
          </div>
        </div>
      </div>
    );
  }
}
