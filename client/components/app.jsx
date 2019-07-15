import React from 'react';
import Header from './header';

import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
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
    this.getCartItems();
  }
  placeOrder() {

  }
  getCartItems() {
    fetch('/api/cart.php', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(cartItems => this.setState({
        cart: cartItems
      }))
      .catch(error => error);
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
  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(res => this.setState({
        cart: this.state.cart.concat(res)
      }))
      .catch(error => error);
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <ProductList products={this.state.products} view={this.setView}/>
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <ProductDetails params={this.state.view.params} setView={this.setView} addToCart={this.addToCart}/>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <CartSummary cartState={this.state.cart} setView={this.setView}/>
        </div>
      );
    }
  }
}
