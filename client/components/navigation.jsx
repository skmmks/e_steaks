import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleView = this.handleView.bind(this);
  }
  handleView(e) {
    e.preventDefault();
    this.props.setView(e.target.name, {});
  }
  render() {
    return (
      <div className='navigationBar'>
        <Navbar>
          <NavbarBrand className='pointer-hover' name='landingPage' onClick={this.handleView}>
            <img className='headerLogo' src='images/logo2.png' alt='' name='landingPage' />
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink className='pointer-hover m-0' name='catalog' onClick={this.handleView}>
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='pointer-hover m-0' name='aboutApp' onClick={this.handleView}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='pointer-hover m-0' name='contact' onClick={this.handleView}>
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
