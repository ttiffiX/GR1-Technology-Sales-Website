import React from 'react';
import {useToast} from "../Toast/Toast";

function AddToCart({ setCount, stocked }) {
    const maxCart = 10;

    // Increment the cart count when the button is clicked
    const { setShowSuccessToast, setShowErrorToast } = useToast(); // Sử dụng context để hiển thị toast

    // Increment the cart count when the button is clicked
    function handleAddToCart() {
        setCount((prevCount) => {
            if (prevCount < maxCart) {
                setShowSuccessToast(true); // Đặt state trong ToastContext để hiển thị success toast
                return prevCount + 1; // Increase the count by 1
            } else {
                setShowErrorToast(true); // Đặt state trong ToastContext để hiển thị error toast
                return prevCount; // Không thay đổi giá trị của count nếu vượt quá maxCart
            }
        });
    }

    return (
        <button
            className={`addToCart ${!stocked ? 'disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={!stocked}
        >
            Add To Cart
        </button>
    );
}

export default AddToCart;
