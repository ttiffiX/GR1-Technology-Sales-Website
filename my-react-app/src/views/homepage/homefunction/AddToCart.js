// AddToCart.js
import React, {useEffect} from 'react';
import {toast} from 'react-toastify';

function AddToCart({setCount, stocked}) {
    const maxCart = 10;

    // Increment the cart count when the button is clicked
    function handleAddToCart() {
        setCount(prevCount => {
            if (prevCount < maxCart) {
                toast.success("Add To Cart successfully!");
                return prevCount + 1; // Increase the count by 1
            } else {
                toast.error("Too muchhhh!!!");
                return prevCount; // Không thay đổi giá trị của count nếu vượt quá maxCart
            }
        });
    }

    return (
        <button className={`addToCart ${!stocked ? 'disabled' : ''}`}
                onClick={handleAddToCart}
                disabled={!stocked}
        >Add To Cart</button>
    );
}

export default AddToCart;
