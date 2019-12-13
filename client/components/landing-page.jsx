import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal : false
    }
    this.handleContinueButton = this.handleContinueButton.bind(this);
    this.handleAboutButton = this.handleAboutButton.bind(this); 
    this.toggle = this.toggle.bind(this); 
  }
  handleContinueButton(e) {
    e.preventDefault();
    this.props.setView('catalog', {});
  }
  handleAboutButton(e) {
    e.preventDefault(); 
    this.props.setView('aboutApp', {}); 
  }
  toggle() {
    this.setState(previousState => ({
        modal: !previousState.modal
    }));
  }
  render() {
    return (
      <div className="text-right landingPage">
        <div>
          <h1> <img src="images/logo.png" alt="Heritage Farm Logo"/> Welcome to Heritage Farm Steaks</h1>
          
        </div>
        <div>
          <div onClick={this.handleAboutButton} className='btn btn-success my-2'>
            <h3>About</h3>
          </div>
        </div>
        <div>
          <div onClick={this.toggle} className='btn btn-success my-2'>
            <h3>Disclaimer</h3>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalBody className="text-center"> 
              <h1>Please note that this is a demo site and not a real online store.  </h1>
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
      </div>
    );
  }
}
