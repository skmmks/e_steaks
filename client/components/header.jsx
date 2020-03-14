import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.handleLandingPageView = this.handleLandingPageView.bind(this);
    this.handleCartView = this.handleCartView.bind(this);
    this.handleCatalogView = this.handleCatalogView.bind(this);
    this.handleAboutAppView = this.handleAboutAppView.bind(this);
  }
  handleLandingPageView(e) {
    e.preventDefault();
    this.props.setView('landingPage', {});
  }
  handleCartView(e) {
    e.preventDefault();
    this.props.setView('cart', {});
  }
  handleCatalogView(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  handleAboutAppView(e) {
    e.preventDefault();
    this.props.setView('aboutApp', {});
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let orders = this.props.cartItemCount.reduce((total, product) => {
      total += product.quantity;
      return total;
    }, 0);
    return (
      <div>
        <Navbar color='dark' expand='md'>
          <NavbarBrand className='header-font pointer-hover noselect' onClick={this.handleLandingPageView}>
            Heritage Farm
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavLink className='pointer-hover'>
                <i className='fas fa-tractor fa-lg' onClick={this.handleLandingPageView}></i>
              </NavLink>
              <NavLink className='pointer-hover'>
                <i className='fas fa-utensils fa-lg' onClick={this.handleCatalogView}></i>
              </NavLink>
              <NavLink className='pointer-hover'>
                <i className='fas fa-shopping-cart fa-lg' onClick={this.handleCartView}>
                  {orders}
                </i>
              </NavLink>
              <NavLink className='pointer-hover'>
                <i className='fas fa-question-circle fa-lg' onClick={this.handleAboutAppView}></i>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
