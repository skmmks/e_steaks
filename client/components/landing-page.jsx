import React from 'react';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleContinueButton = this.handleContinueButton.bind(this);
  }
  handleContinueButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  landingPageModal(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <div>
          <h1 className="text-center">Welcome to Heritage Farm Steaks</h1>
        </div>
        <div>
          <div onClick={this.handleContinueButton} className='btn btn-primary'>
            <h3>Continue To Catalog</h3>
          </div>
        </div>
        <div>
          <div onClick={this.landingPageModal} className='btn btn-primary'>
            <h3>Disclaimer</h3>
          </div>
        </div>
        <div>
          <div className='btn btn-primary'>
            <h3>About</h3>
          </div>
        </div>
      </div>
    );
  }
}
