import React from 'react';
import Header from './header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(retrieveProducts => this.setState({
        products: this.state.products(retrieveProducts)
      }));
  }
  render() {
    return (
      <Header />
    );
  }
}
