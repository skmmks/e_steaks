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
        <Row className='mb-2'>
          <Col sm='3'>
            <div>
              <img className='checkoutThumbnail' src={this.props.product.image} alt={this.props.product.name} />
              <Badge className='notify-badge' color='danger' pill>
                {this.props.product.quantity}
              </Badge>
            </div>
          </Col>
          <Col sm='7'>{this.props.product.name} </Col>
          <Col sm='2' className='text-right'>
            ${total}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
