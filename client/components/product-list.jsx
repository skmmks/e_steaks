import React from 'react';
import ProductListItem from './product-list-item';
import { Container, Row } from 'reactstrap';

export default class ProductList extends React.Component {
  render() {
    const merch = this.props.products.map(merch => (
      <ProductListItem key={merch.id} merch={merch} setView={this.props.setView} />
    ));
    return (
      // <div className='container'>
      //   <div>
      //     <img className='catalogBanner' src='/images/catalog-banner.jpg' alt='' />
      //   </div>
      //   <h1 className='catalogHeader'>classic lineup</h1>
      //   <hr />
      //   <div className='row'>{merch}</div>
      // </div>
      <React.Fragment>
        <div>
          <img className='catalogBanner' src='./images/catalog-banner.jpg' alt='Catalog banner image' />
        </div>
        <hr />
        <div>
          <h1 className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ad unde nihil facilis cum odio, molestiae
            nesciunt? Ab eveniet nesciunt, cupiditate molestias quos tempore consequuntur reprehenderit quasi. Omnis,
            corporis et.
          </h1>
        </div>
        <hr />
        <Container>
          <Row>{merch}</Row>
        </Container>
      </React.Fragment>
    );
  }
}

// <React.Fragment>
//   <img className='banner-image' src='./media/catalog-hero.jpg' alt='Catalog banner image' />
//   <Row className='justify-content-md-center mr-1 ml-1'>{items}</Row>
// </React.Fragment>;
