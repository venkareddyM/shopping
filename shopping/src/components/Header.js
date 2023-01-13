import React from 'react';

 function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="/">
          <h3>Shopping Cart</h3>
        </a>
      </div>
      <div>
        <a href="/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : ('')}
        </a>{' '}
      </div>
    </header>
  );
}
export default Header;
