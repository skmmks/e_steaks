import React from 'react';
import { Row } from 'reactstrap';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  render() {
    const merch = this.props.products.map(merch => (
      <ProductListItem key={merch.id} merch={merch} setView={this.props.setView} />
    ));
    return (
      <div className='container'>
        <div className='row'>{merch}</div>
      </div>
    );
  }
}
