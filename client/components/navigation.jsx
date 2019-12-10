import React from 'react'; 
import { 
    Collapse, 
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem, 
    NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            isOpen: false
        }
        this.handleLandingPage = this.handleLandingPage.bind(this); 
        this.handleDisplayCart = this.handleDisplayCart.bind(this); 
        this.toggle = this.toggle.bind(this);
    }
    handleLandingPage(e) {
        e.preventDefault(); 
        this.props.setView('landingPage', {}); 
    }
    handleDisplayCart(e) {
        e.preventDefault(); 
        this.props.setView('cart', {});
        console.log('cart was clicked')
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar>
                    <NavbarBrand onClick={this.handleLandingPage}>Heritage Farms</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} /> 
                    <NavItem onClick={this.handleDisplayCart}>cart</NavItem> 
                    <NavItem>about</NavItem> 
                </Navbar>
            </div>
        )
    }
}