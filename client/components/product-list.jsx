import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
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
  render() {
    const data = this.state.products.map(item => {
        return (
          <ProductListItem
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            shortDesc={item.shortDescription}
          />
        )
      }
    );
    return (
      <div className="container">
        <div className="row">
          {data}
        </div>
      </div>
    )
  }
}
