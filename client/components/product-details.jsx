import React from 'react';
import Header from './header';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    fetch('/api/products.php?id=1')
      .then(res => res.json())
      .then(res => {
        this.setState({
          product: res
        });
      }
      );
  }
  render() {
    if (!this.state.product) return null;
    return (
      <div>
        <Header/>
        <div>
          <img src={this.state.product.image} alt="Product Image"/>
          {this.state.product.name}
          {this.state.product.price}
          {this.state.product.shortDescription}
          {this.state.product.longDescription}
        </div>
      </div>
    );
  }
}
export default ProductDetails;
