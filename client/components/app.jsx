import React from 'react';
import Header from './header';
import ProductListItem from './product-list-item';

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
      .then(retrieveProducts => this.setState(this.state.products))
      .catch(error => error);
  }
  render() {
    return (
      <div>
        <Header />
        <ProductListItem />
      </div>
    );
  }
}
