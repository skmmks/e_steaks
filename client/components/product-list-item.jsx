import React from 'react';

class ProductListItem extends React.Component {
  render() {
    const price = this.props.merch.price / 100;
    return (
      <div className='col-sm-4'>
        <div className='card-group h-100'>
          <div className="card mt-3">
            <img height='300px' width="100%" className='card-image-top' src={this.props.merch.image} alt={this.props.merch.name}/>
            <h2 className='card-header'>{this.props.merch.name}</h2>
            <h4>${price.toFixed(2)}</h4>
            <h6>{this.props.merch.shortDescription}</h6>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductListItem;
