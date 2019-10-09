import React from 'react';

export default class ProductList extends React.Component{
  constructor(props) {
    super(props);
    this.setState({
      products: []
    })
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(data => this.setState({
        products: data
      }))
  }
}
