import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetView = this.handleSetView.bind(this);
  }
  handleSetView(e) {
    e.preventDefault();
    this.props.setView('details', { id: this.props.merch.id });
  }
  render() {
    const price = this.props.merch.price / 100;
    return (
      <div className='col-sm-4'>
        <div className='card-group h-100 pointer-hover'>
          <div className='card mt-3 catalogPage' onClick={this.handleSetView}>
            <img
              height='300px'
              width='100%'
              className='card-image-top'
              src={this.props.merch.image}
              alt={this.props.merch.name}
            />
            <div className='productTitle'>{this.props.merch.name}</div>
            <div className='productPrice'>${price.toFixed(2)}</div>
            <div className='productDescription'>{this.props.merch.shortDescription}</div>
          </div>
        </div>
      </div>
    );
  }
}
