import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

import CheckoutSummary from './checkout-summary';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      creditCard: '',
      address: '',
      city: '',
      zip: '',
      phone: '',
      orderID: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handlePlaceOrder = this.handlePlaceOrder.bind(this);
    this.toggle = this.toggle.bind(this);
    // this.validate = this.validateText.bind(this);
  }
  componentDidMount() {
    const orderID = Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase();
    this.setState({
      orderID: orderID
    });
  }
  toggle() {
    this.setState(previousState => ({
      modal: !previousState.modal
    }));
  }
  handleCartClick(e) {
    e.preventDefault();
    this.props.setView('cart', {});
  }
  handleInput(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.orderDetails(this.state.orderID);
    this.toggle();
  }
  handlePlaceOrder(e) {
    e.preventDefault();
    this.toggle();
    this.props.placeOrder(this.state.orderId);
    this.props.setView('confirmationPage', {});
  }
  // validateText(e) {
  //   console.log('name: ', e.target.name);
  //   console.log('value: ', e.target.value);
  //   const regexTest = /[A-Za-z0-9]/;
  //   // const { validate } = this.state;
  //   regexTest.test(e.target.value) ? ([e.target.name] = 'success') : ([e.target.name] = 'unsuccess');
  // }
  render() {
    const currentCart = this.props.cart.map((product, index) => (
      <CheckoutSummary key={index} product={product} setView={this.props.setView} />
    ));
    const priceOfCartItems = this.props.cart.reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue.price),
      0
    );
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col className='mt-5'>CHECKOUT</Col>
          </Row>
          <Row className='mt-3'>
            <Col sm='5'>
              <Form onSubmit={this.handlePlaceOrder}>
                <FormGroup>
                  <Input
                    name='name'
                    placeholder='Your Name Here'
                    className='form-control mb-3'
                    type='text'
                    onChange={this.handleInput}
                    value={this.state.name}
                  />
                  <Input
                    name='creditCard'
                    placeholder='XXXX-XXXX-XXXX'
                    className='form-control mb-3'
                    type='number'
                    onChange={this.handleInput}
                    value={this.state.creditCard}
                  />
                  <Input
                    name='address'
                    placeholder='Address'
                    className='form-control mb-3'
                    type='text'
                    onChange={this.handleInput}
                    value={this.state.address}
                  />
                  <Input
                    name='city'
                    placeholder='City'
                    className='form-control mb-3'
                    type='text'
                    onChange={this.handleInput}
                    value={this.state.city}
                  />
                  <Input
                    name='zip'
                    placeholder='Zip Code'
                    className='form-control mb-3'
                    type='text'
                    onChange={this.handleInput}
                    value={this.state.zip}
                  />
                  <Input
                    name='phone'
                    placeholder='Phone'
                    className='form-control mb-3'
                    type='number'
                    onChange={this.handleInput}
                    value={this.state.phone}
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col sm='7'>{currentCart}</Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={this.handleCartClick}>Return To Cart</Button>
              <Button type='submit' onClick={this.handleSubmit}>
                Checkout
              </Button>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col>
                  <div>Name:{this.state.name}</div>
                  <div>Address:{this.state.address}</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                </Col>
                <Col>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Go Back</Button>
            <Button onClick={this.handlePlaceOrder}>Submit</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
