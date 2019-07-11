import React from 'react';

class ProductListItem extends React.Component {
  render() {
    // console.log(this.props.merch.name);
    return (
      <div className="col-sm-4 card-deck">
        <div className="card">
          <img src={this.props.merch.image} alt={this.props.merch.name}/>
        </div>
      </div>
    );
  }
}
export default ProductListItem;
