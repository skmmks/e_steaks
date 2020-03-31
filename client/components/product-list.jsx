import React from 'react';
import ProductListItem from './product-list-item';
import { Container, Row } from 'reactstrap';

export default class ProductList extends React.Component {
  render() {
    const merch = this.props.products.map(merch => (
      <ProductListItem key={merch.id} merch={merch} setView={this.props.setView} />
    ));
    return (
      <React.Fragment>
        <Container>
          <h1 className='bannerText'>Classic Lineup</h1>
        </Container>
        <div>
          <img className='catalogBanner' src='./images/catalog-banner.jpg' alt='Catalog banner image' />
        </div>
        <hr />
        <div>
          <div className='mx-5 px-5 text-center'>
            Heritage Farms is celebrated world-wide by chefs and connoisseurs. Our family-owned business is focused on
            creating the most delicious beef available.
            <br />
            We take pride in doing what is right - for our animals, our environment, and our customers. We're one of the
            only beef companies in the world that personally touches every aspect of production from start to finish.
          </div>
        </div>
        <hr />
        <Container>
          <Row>{merch}</Row>
        </Container>
      </React.Fragment>
    );
  }
}
