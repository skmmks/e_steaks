import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component{
  constructor(props) {
    super(props);
    this.setState({
      products: [],
    });
    this.getProducts = this.getProducts.bind(this);
  }
  componentDidMount() {
    this.getProducts();
    console.log('1')
  }
  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(data => this.setState({
        products: data
      }))
  }
  render() {
    console.log('2')
    return (
      console.log('3')
    );
  }
}
