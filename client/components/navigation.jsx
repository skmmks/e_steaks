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
        this.handleLandingPage = this.handleLandingPage.bind(this); 
    }
    handleLandingPage(e) {
        e.preventDefault(); 
        this.props.setView('landingPage', {}); 
    }
    render() {
        return (
            <div>
                <Navbar>
                    <NavbarBrand onClick={this.handleLandingPage}>Heritage Farms</NavbarBrand>
                </Navbar>
            </div>
        )
    }
}