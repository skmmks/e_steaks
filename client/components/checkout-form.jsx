import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, FormFeedback, Input, InputGroup, Row } from 'reactstrap';
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
        cardVerificationValue: ''
      },
      modal: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    const orderId = Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase();
    this.setState({ orderId: orderId });
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
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
      creditCard: this.state.creditCard
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
    // let orderQuantities = this.props.cart.reduce((total, product) => {
    //   total += product.quantity;
    //   return total;
    // }, 0);
    const totalCartPrice = this.props.cart.reduce((acc, cur) => {
      acc += cur.price * cur.quantity;
      return acc;
    }, 0);
    const totalPrice = parseFloat(totalCartPrice / 100).toFixed(2);
    return (
      <React.Fragment>
        <Container className='mt-4 mb-5'>
          <div className='text-left card-font mb-4'>
            {' '}
            <span style={{ color: 'rgb(93, 148, 155)' }} className='pointer-hover' onClick={this.handleCartClick}>
              Cart
            </span>{' '}
            > Information > Shipping > Payment
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
              <Card className='mb-4'>
                <CardHeader>
                  <div>Shipping Address</div>
                </CardHeader>
                <CardBody>
                  <InputGroup className='mb-1'>
                    <Input placeholder='Name' name='name' />
                  </InputGroup>
                  <InputGroup className='mb-1'>
                    <Input placeholder='Address' name='address' />
                  </InputGroup>
                  <InputGroup className=''>
                    <Input placeholder='Phone' name='phone' />
                  </InputGroup>
                </CardBody>
              </Card>
              <button
                type='button'
                className='btn btn-lg btn-secondary btn-block card-font'
                onClick={this.handleCartClick}
              >
                BACK TO CART
              </button>
              <button type='button' className='btn btn-lg btn-success btn-block card-font' onClick={this.handleOrder}>
                CONFIRM SHIPPING & BILLING
              </button>
            </Col>
            <Col className='orderSummary' sm='5'>
              <div className='h3 card-font'>IN YOUR CART</div>
              {/* <div>{cartItems}</div> */}
              <hr />
              <div className='h6 description-font'>
                Subtotal:
                <span className='float-right'>${(totalCartPrice / 100).toFixed(2)}</span>
              </div>
              <hr />
              <div className='h4 card-font mb-4 text-orange'>
                TOTAL : <span className='float-right'>${totalPrice}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
