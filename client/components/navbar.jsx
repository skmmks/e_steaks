import React from 'react'; 
import { 
    Collapse, 
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem, 
    NavLink } from 'reactstrap';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props); 
    }
    render() {
        return (
            <div><h1>This is the navbar</h1></div>
        )
    }
}