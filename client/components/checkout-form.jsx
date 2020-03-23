import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';

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
      phone: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCartClick = this.handleCartClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // this.validate = this.validateText.bind(this);
  }
  handleCartClick(e) {
    e.preventDefault();
    this.props.setView('cart', {});
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.props.placeOrder(this.state);
    this.props.setView('landingPage', {});
  }
  handleInput(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
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
              <Form onSubmit={this.handleSubmit}>
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
      </React.Fragment>
      // <div className='container'>
      //   <div className='col'>
      //     <h1 className='mt-3'>Checkout</h1>
      //     <h5 className='text-muted mb-5'>Order Total ${(priceOfCartItems / 100).toFixed(2)}</h5>
      //     <h5>Name</h5>
      //     <input
      //       name='name'
      //       placeholder='Your Name Here'
      //       className='form-control mb-3'
      //       type='text'
      //       onChange={this.handleInput}
      //       value={this.state.name}
      //     />
      //     <h5>Credit Card</h5>
      //     <input
      //       name='creditCard'
      //       placeholder='XXXX-XXXX-XXXX'
      //       className='form-control mb-3'
      //       type='number'
      //       onChange={this.handleInput}
      //       value={this.state.creditCard}
      //     />
      //     <h5>Shipping Address</h5>
      //     <textarea
      //       name='address'
      //       placeholder='Your Address Here'
      //       className='form-control mb-3'
      //       type='text'
      //       onChange={this.handleInput}
      //       value={this.state.address}
      //     ></textarea>
      //     <div>
      //       <Button className='ml-2 col-5 btn btn-primary' onClick={this.handleCartClick}>
      //         Return to Catalog
      //       </Button>
      //       <input className='ml-2 col-5 btn btn-warning float-right' type='submit' />
      //     </div>
      //   </div>
      // </div>
    );
  }
}
