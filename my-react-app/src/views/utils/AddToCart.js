// AddToCart.js
import React from 'react';

function AddToCart({ setCount }) {

    // Increment the cart count when the button is clicked
    function handleAddToCart() {
        setCount(prevCount => prevCount + 1); // Increase the count by 1

    }

    return (
        <button className={"addToCart"} onClick={handleAddToCart}>Add To Cart</button>
    );
}

export default AddToCart;
