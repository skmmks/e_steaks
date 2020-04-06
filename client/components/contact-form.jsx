import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.setState({
      displayMessage: 'Thank You For The Message',
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className='text-center col-xl-7 col-lg-7 m-auto'>
          <div>
            <h2 className='mb-3'>Contact</h2>
          </div>
          <div className='mb-5'>Use the form below to contact us with any questions or comments you may have.</div>
          <div>{this.state.displayMessage}</div>
          <div className='contact-form mb-50' data-wow-delay='.3s'>
            <div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input className='form-control' type='text' placeholder='Your Name' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input className='form-control' placeholder='Your Email' />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <input className='form-control' placeholder='Your Phone' />
                  </div>
                  <div className='form-group error'>
                    <textarea className='form-control' placeholder='Your Message'></textarea>
                  </div>
                </div>
                <div className='col-md-12'>
                  <button className='addToCartButton'>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
