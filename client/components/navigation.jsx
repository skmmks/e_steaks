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
        {/* mollyjogger */}
        <Navbar>
          <NavbarBrand name='landingPage' onClick={this.handleView}>
            Heritage Farms
          </NavbarBrand>
          <NavbarBrand name='catalog' value='catalog' onClick={this.handleView}>
            Shop
          </NavbarBrand>
          <NavbarBrand name='aboutApp' onClick={this.handleView}>
            About
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
