import React from 'react';
import CheckoutSummary from './cart-summary-item';

export default class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleViewChange = this.handleViewChange.bind(this);
  }
  handleViewChange(e) {
    e.preventDefault();
    this.props.setView(e.target.name, {});
  }
  render() {
    return <h1>confirmation page</h1>;
  }
}
