import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='col'>
        <div className="row">
          <h2 className='col-10'><img src="/shop.png" alt="Wicked Sales Icon"/> The Shop</h2>
          <p className='mt-2 ml-5'>{this.props.cartItemCount} <img src="/shopping-cart.png" alt="shopping cart"/></p>
        </div>
      </div>
    );
  }
}
// function Header() {
//   return (
//     <div>
//       <h2>
//         <img src="/shop.png" alt="Wicked Sales Icon"/> The Shop
//       </h2>
//     </div>
//   );
// }
// export default Header;
