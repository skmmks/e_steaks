import React from 'react';
import CheckoutSummary from './cart-summary-item';
import { Container, Row, Col } from 'reactstrap';

export default class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleViewChange = this.handleViewChange.bind(this);
  }
  handleViewChange(e) {
    e.preventDefault();
    this.props.setView('landingPage', {});
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col onClick={this.handleViewChange}>Done</Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
