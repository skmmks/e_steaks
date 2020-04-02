import React from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';

export default class CheckoutSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const total = ((this.props.product.price * this.props.product.quantity) / 100).toFixed(2);
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col className='mb-2' sm='4'>
              <img className='col-sm-12' src={this.props.product.image} alt=''></img>
              {/* <Badge className='quantityBadge' color='light' pill>
                {this.props.product.quantity}
              </Badge> */}
            </Col>
            <Col sm='7'>{this.props.product.name}</Col>
            <Col sm='1'>${total}</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
