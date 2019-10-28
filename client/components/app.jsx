import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetail from './product-details';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ProductList />
        <ProductDetail />
      </React.Fragment>
    );
  }
}
