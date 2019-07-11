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
    fetch('/api/products.php', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(retrieveProducts => this.setState({
        products: retrieveProducts
      }))
      .catch(error => error);
  }
  render() {
    return (
      <div className={'container'}>
        <Header />
        <ProductListItem/>
      </div>
    );
  }
}
