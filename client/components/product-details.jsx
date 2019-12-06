import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null, 
      value: 1
    };
    this.handleReturnButton = this.handleReturnButton.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.increment = this.increment.bind(this); 
  }
  increment() {
    this.setState(prevState => {value: ++prevState.value});
  }
  handleReturnButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  handleAddToCart(e) {
    e.preventDefault();
    this.props.addToCart(this.state.product);
  }
  componentDidMount() {
    const paramID = this.props.params.id;
    fetch(`/api/products.php?id=${paramID}`)
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
        <div onClick={this.handleReturnButton} className={'btn btn-primary ml-2'}>Back to Catalog</div>
        <div className='row'>
          <div className="col-lg-5 ml-5 mt-2">
            <img height='400px' width='100%' src={this.state.product.image} alt="Product Image"/>
          </div>
          <div className="col-lg-4">
            <h1>
              {this.state.product.name}
            </h1>
            <h4 className='text-muted'>
              ${((this.state.product.price) / 100).toFixed(2)}
            </h4>
            <h5>
              {this.state.product.shortDescription}
            </h5>
            <i class="far fa-minus-square"></i>
            <input type="text" value="1"/>
            <i class="far fa-plus-square"></i>
            <div className='btn btn-warning mt-4' onClick={this.handleAddToCart}>
              Add To Cart
            </div>
          </div>
        </div>
        <div className="row">
          <div className='col mx-5'>{this.state.product.longDescription}</div>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
