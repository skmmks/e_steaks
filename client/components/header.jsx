import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetView = this.handleSetView.bind(this);
  }
  handleSetView(e) {
    e.preventDefault();
    this.props.setView("cart", {});
  }
  render() {
    return (
      <div className="col">
        <div className="row">
          <div className="col text-center text-white bg-dark">
            <h5>FREE SHIPPING ON ORDERS $49 OR MORE</h5>
          </div>
        </div>
        <div className="row">
          <div className="col text-right headerBar">
            Login | Create Account{" "}
            <i
              className="fas fa-shopping-cart"
              onClick={this.handleSetView}
            ></i>{" "}
            ({this.props.cartItemCount})
          </div>
        </div>
      </div>
    );
  }
}
