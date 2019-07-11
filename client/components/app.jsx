import React from 'react';
import Header from './header';

import ProductList from './product-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }
  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
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
      <div>
        <Header />
        <ProductList products={this.state.products}/>
      </div>
    );
  }
}
