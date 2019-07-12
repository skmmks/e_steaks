import React from 'react';
import Header from './header';

import ProductList from './product-list';
import ProductDetails from './product-details';

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
        params: params,
        cart: []
      }
    });
  }
  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }
  getCartItems() {
    fetch('/api/cart.php', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(cartItems => this.setState({
        cart: cartItems
      }));
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
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header/>
          <ProductList products={this.state.products} view={this.setView}/>
        </div>
      );
    } else {
      return (
        <div>
          <ProductDetails params={this.state.view.params} setView={this.setView}/>
        </div>
      );
    }
  }
}
