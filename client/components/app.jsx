import React from 'react';
import Header from './header';

import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import LandingPage from './landing-page';
import AboutApp from './about-app';
import Navigation from './navigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'cart',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.updateFromCart = this.updateFromCart.bind(this);
  }
  setView(name, params) {
    this.setState({
      view: {
        name,
        params
      }
    });
  }
  componentDidMount() {
    this.getProducts();
    if (!localStorage.cart) {
      localStorage.cart = JSON.stringify(this.state.cart);
    } else {
      this.setState({ cart: JSON.parse(localStorage.cart) });
    }
  }
  placeOrder(info) {
    let currentCart = [...this.state.cart];
    let orderDetails = {
      info,
      cart: JSON.stringify(currentCart)
    };
    currentCart.map(product => {
      delete product.description;
      delete product.image;
    });
    fetch('./api/orders.php', {
      method: 'POST',
      body: JSON.stringify(orderDetails),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(() => {
        localStorage.cart = JSON.stringify([]);
        this.setState({ cart: [] });
      })
      .catch(error => error);
  }
  getCartItems() {
    fetch('/api/cart.php', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(cartItems =>
        this.setState({
          cart: cartItems
        })
      )
      .catch(error => error);
  }
  getProducts() {
    fetch('./api/products.php', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(retrieveProducts =>
        this.setState({
          products: retrieveProducts
        })
      )
      .catch(error => error);
  }
  addToCart(product, productQuantity) {
    product.quantity = 0;

    let currentCart = JSON.parse(localStorage.getItem('cart'));
    let numberofProduct = currentCart.findIndex(itemIndex => {
      return itemIndex.id === product.id;
    });
    if (numberofProduct > -1) {
      currentCart[numberofProduct].quantity += productQuantity;
    } else if (isNaN(product.quantity)) {
      product.quantity = productQuantity;
      currentCart.push(product);
    } else {
      product.quantity = product.quantity + productQuantity;
      currentCart.push(product);
    }
    this.setState({ cart: currentCart });
    localStorage.cart = JSON.stringify(currentCart);
  }
  removeFromCart(productId) {
    let currentCart = JSON.parse(localStorage.getItem('cart'));
    let itemIndex = currentCart.findIndex(steak => {
      return steak.id === productId;
    });
    currentCart.splice(itemIndex, 1);
    this.setState({ cart: currentCart });
    localStorage.cart = JSON.stringify(currentCart);
  }
  updateFromCart(productID, update) {
    let currentCart = JSON.parse(localStorage.getItem('cart'));
    let updatedIndex = currentCart.findIndex(item => {
      return item.id === productID;
    });
    update === 'increment' ? currentCart[updatedIndex].quantity++ : currentCart[updatedIndex].quantity--;
    this.setState({ cart: currentCart });
    localStorage.cart = JSON.stringify(currentCart);
  }
  render() {
    if (this.state.view.name === 'landingPage') {
      return (
        <React.Fragment>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <LandingPage setView={this.setView} />
        </React.Fragment>
      );
    } else if (this.state.view.name === 'aboutApp') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <AboutApp setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <ProductList products={this.state.products} setView={this.setView} />
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <ProductDetails
            item={this.state.products[this.state.view.params.id - 1]}
            addToCart={this.addToCart}
            setView={this.setView}
          />
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <CartSummary
            cart={this.state.cart}
            update={this.updateFromCart}
            setView={this.setView}
            removeFromCart={this.removeFromCart}
          />
          {/* <CartSummary removeFromCart={this.removeFromCart} cartState={this.state.cart} setView={this.setView} /> */}
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart} setView={this.setView} />
          <CheckoutForm cartState={this.state.cart} placeOrder={this.placeOrder} setView={this.setView} />
        </div>
      );
    }
  }
}
