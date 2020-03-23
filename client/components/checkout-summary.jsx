import React from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';

export default class CheckoutSummary extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.style.background = '#fff';
  }
  render() {
    const total = ((this.props.product.price * this.props.product.quantity) / 100).toFixed(2);
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col sm='5'>
              <img className='col-sm-10 mx-auto' src={this.props.product.image} alt=''></img>
              <Badge className='quantityBadge' color='light' pill>
                {this.props.product.quantity}
              </Badge>
            </Col>
            <Col sm='5'>{this.props.product.name}</Col>
            <Col sm='2'>${total}</Col>
          </Row>
          <Row></Row>
        </Container>
        {/* <div>
          <div>
            <img className='col-sm-5 mx-auto' src={this.props.product.image} alt={this.props.product.name} />
            {this.props.product.name}${(this.props.product.price / 100).toFixed(2)}
            <h1>{this.props.product.quantity}</h1>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}
