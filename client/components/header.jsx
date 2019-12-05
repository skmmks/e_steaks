import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetView = this.handleSetView.bind(this);
  }
  handleSetView(e) {
    e.preventDefault();
    this.props.setView('cart', {});
  }
  render() {
    return (
      <div className='col'>
        <div className="row">
          <div className="col text-right text-white bg-dark">
            <h5>Order Before December 1st To Recieve 20% Off!</h5>
          </div>
        </div>
        <div className="row">
          <h2 className='col text-center'> <i className="fas fa-store-alt"></i> Hartland Farms</h2>

        </div>
        <div className="row">
          <div className="col text-right mr-3" ><i className="fas fa-shopping-cart" onClick={this.handleSetView}></i> ({this.props.cartItemCount})</div>
        </div>
      </div>
    );
  }
}
