import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetView = this.handleSetView.bind(this);
  }
  handleSetView(e) {
    e.preventDefault();
    this.props.view('details', { id: this.props.merch.id });
  }
  render() {
    const price = this.props.merch.price / 100;
    return (
      <div className='col-sm-4'>
        <div className='card-group h-100'>
          <div className="card mt-3" onClick={this.handleSetView}>
            <img height='300px' width="100%" className='card-image-top' src={this.props.merch.image} alt={this.props.merch.name}/>
            <h2 className='card-header'>{this.props.merch.name}</h2>
            <h4>${price.toFixed(2)}</h4>
            <p>{this.props.merch.shortDescription}</p>
          </div>
        </div>
      </div>
    );
  }
}
