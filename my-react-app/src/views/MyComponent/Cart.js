import React from 'react';

function Cart({ cart }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <h3>Tổng: ${total}</h3>
    </div>
  );
}

export default Cart;
