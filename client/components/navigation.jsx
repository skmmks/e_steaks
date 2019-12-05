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
        this.toggle = this.toggle.bind(this);
    }
    handleLandingPage(e) {
        e.preventDefault(); 
        this.props.setView('landingPage', {}); 
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
                </Navbar>
            </div>
        )
    }
}