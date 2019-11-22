import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal : false
    }
    this.handleContinueButton = this.handleContinueButton.bind(this);
    this.toggle = this.toggle.bind(this); 
  }
  handleContinueButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  // landingPageModal(e) {
  //   e.preventDefault();
  // }
  toggle() {
    this.setState(previousState => ({
        modal: !previousState.modal
    }));
  }
  render() {
    return (
      <div className="text-center">
        <div>
          <h1>Welcome to Heritage Farm Steaks</h1>
          <img src="images/logo.png" alt=""/>
        </div>
        <div>
          <div className='btn btn-primary my-2'>
            <h3>About</h3>
          </div>
        </div>
        <div>
          <div onClick={this.toggle} className='btn btn-primary my-2'>
            <h3>Disclaimer</h3>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalBody className="text-center"> 
                Text
              </ModalBody>
              <ModalFooter>
                <Button onClick={this.toggle}>
                  <div onClick={this.handleContinueButton}>
                    <p>I Understand,<br /> Continue to Catalog</p>
                  </div>
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
        {/* <div>
          <div onClick={this.handleContinueButton} className='btn btn-primary my-2'>
            <h3>Continue To Catalog</h3>
          </div>
        </div> */}
      </div>
    );
  }
}
