import React from 'react';
import Header from './header';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.handleReturnButton = this.handleReturnButton.bind(this);
  }
  handleReturnButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
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
        <Header/>
        <div onClick={this.handleReturnButton} className={'btn btn-primary ml-2'}>Back to Catalog</div>
        <div className='row'>
          <div className="col-lg-5 ml-5 mt-2">
            <img height='400px' width='100%' src={this.state.product.image} alt="Product Image"/>
          </div>
          <div className="col-lg-4">
            <h1>{this.state.product.name}</h1>
            <h4 className='text-muted'>${((this.state.product.price) / 100).toFixed(2)}</h4>
            <h5>{this.state.product.shortDescription}</h5>
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
