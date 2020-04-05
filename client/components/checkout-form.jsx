import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, FormFeedback, Input, InputGroup, Row, Button } from 'reactstrap';
import CheckoutSummary from './checkout-summary';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: '',
      name: '',
      address: '',
      email: '',
      phone: '',
      creditCard: '',
      ccExpiration: '',
      cvv: '',
      validate: {
        name: '',
        address: '',
        email: '',
        phone: '',
        creditCard: '',
        creditCardExpiration: '',
        cardVerificationValue: '',
      },
      modal: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    // this.validateText = this.validateText.bind(this);
    // this.onTextChange = this.onTextChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
    this.setState({ orderId: orderId });
  }
  toggle() {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }
  // validateText(e) {
  //   const nameRegex = /[A-Za-z0-9]/;
  //   let { validate } = this.state;
  //   if (nameRegex.test(e.target.value)) {
  //     validate = 'has-success';
  //   } else {
  //     validate = 'has-danger';
  //   }
  //   this.setState({ validate });
  // }
  // onTextChange(e) {
  //   this.handleInputChange(e);
  //   this.validateText(e);
  // }
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleCartClick(e) {
    e.preventDefault();
    this.props.setView('cart', {});
  }
  handleSubmit(e) {
    e.preventDefault();
    const customerInformation = {
      orderId: this.state.orderId,
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone,
      creditCard: this.state.creditCard,
    };
    this.props.orderDetails(customerInformation);
  }
  handleOrder(e) {
    e.preventDefault();
    this.toggle();
    this.props.placeOrder(
      this.state.orderId,
      this.state.name,
      this.state.address,
      this.state.email,
      this.state.phone,
      this.state.creditCard
    );
    this.props.setView('confirmationPage', {});
  }
  render() {
    const cartItems = this.props.cart.map((product, index) => (
      <CheckoutSummary key={index} product={product} setView={this.props.setView} />
    ));
    const totalPrice = this.props.cart.reduce((acc, cur) => {
      acc += cur.price * cur.quantity;
      return acc;
    }, 0);
    let cartTotal = totalPrice > 5000 ? parseFloat(totalPrice) / 100 : parseFloat(totalPrice + 799) / 100;
    let shippingConditionalDOM = totalPrice > 5000 ? <span>Free</span> : <span>$7.99</span>;
    return (
      <React.Fragment>
        <Container className='mt-4 mb-5'>
          <div className='text-left card-font mb-4'>
            {' '}
            <span style={{ color: 'rgb(93, 148, 155)' }} className='pointer-hover' onClick={this.handleCartClick}>
              Cart
            </span>{' '}
            > Shipping Information & Payment
          </div>
          <Row>
            <Col sm='7'>
              <Card className='mb-2'>
                <CardHeader>
                  <div>Contact Information</div>
                </CardHeader>
                <CardBody>
                  <InputGroup className='mb-1'>
                    <Input placeholder='E-Mail' name='email' />
                    <FormFeedback invalid='true'>Please enter a valid e-mail address.</FormFeedback>
                  </InputGroup>
                </CardBody>
              </Card>
              <Card className='mb-2'>
                <CardHeader>
                  <div>Shipping Address</div>
                </CardHeader>
                <CardBody>
                  <InputGroup className='mb-1'>
                    <Input
                      placeholder='Name'
                      // valid={this.state.validate === 'has-success'}
                      // invalid={this.state.validate === 'has-danger'}
                      name='name'
                      // onChange={this.onTextChange}
                    />
                  </InputGroup>
                  <InputGroup className='mb-1'>
                    <Input placeholder='Address' name='address' />
                  </InputGroup>
                  <InputGroup className='mb-1'>
                    <Input placeholder='Phone' name='phone' />
                  </InputGroup>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <div>Payment</div>
                </CardHeader>
                <CardBody>
                  <InputGroup>
                    <Input placeholder='Card Number' name='creditCard'>
                      <FormFeedback invalid='true'>Please enter credit card number with no dashes</FormFeedback>
                    </Input>
                  </InputGroup>
                  <InputGroup>
                    <Input placeholder='Expiration Date (MM/YY)' name='creditCardExpiration'>
                      <FormFeedback invalid='true'>Please enter credit card number with no dashes</FormFeedback>
                    </Input>
                  </InputGroup>
                  <InputGroup>
                    <Input placeholder='Security Code' name='cardVerificationValue'>
                      <FormFeedback invalid='true'>Please enter credit card number with no dashes</FormFeedback>
                    </Input>
                  </InputGroup>
                </CardBody>
              </Card>
            </Col>
            <Col className='orderSummary' sm='5'>
              <div>{cartItems}</div>
              <hr />
              <div className='h6 description-font'>
                Subtotal:
                <span className='float-right'>${(totalPrice / 100).toFixed(2)}</span>
              </div>
              <div className='h6 description-font'>
                Shipping:
                <span className='float-right'>{shippingConditionalDOM}</span>
              </div>
              <hr />
              <div className='h4 card-font mb-4 text-orange'>
                GRAND TOTAL : <span className='float-right'>${cartTotal}</span>
              </div>
              <Button type='button' className='addToCartButton mr-2' onClick={this.handleCartClick}>
                BACK TO CART
              </Button>
              <Button className='addToCartButton ml-2' type='button' onClick={this.handleOrder}>
                Pay Now
              </Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
