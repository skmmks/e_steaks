import React from 'react';
import Header from './header';

import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import LandingPage from './landing-page';
import AboutMe from './about-me';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'landingPage',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
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
  placeOrder(info) {
    info['cart'] = this.state.cart;
    fetch('/api/orders.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(() => this.setState({
        view: {
          name: 'catalog',
          params: {}
        },
        cart: []
      }))
      .catch(error => error);
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
    if (this.state.view.name === 'landingPage') {
      return (
        <div>
          <LandingPage setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'aboutMe') {
      return (
        <div>
          <AboutMe setView={this.setView}/> 
        </div>
      );
    } else if (this.state.view.name === 'catalog') {
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
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
          <CheckoutForm cartState={this.state.cart} placeOrder={this.placeOrder} setView={this.setView}/>
        </div>
      );
    }
  }
}
