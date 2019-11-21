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
  render() {
    return (
      <div>
        <h1>Welcome to Heritage Farm Steaks</h1>
        <div onClick={this.handleContinueButton} className={'btn btn-primary'}>
                Continue to Catalog
        </div>
      </div>
    );
  }
}
