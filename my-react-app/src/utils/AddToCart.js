import React from 'react';
import {useToast} from "../components/Toast/Toast";
import {addCartItem} from "../api/CartAPI";


function AddToCart({product_id, count, stocked}) {

    const maxCart = 10;
    let check = false;
    // Increment the cart count when the button is clicked
    const {setShowSuccessToast, setShowErrorToast, setShowErrorAddToast} = useToast(); // Sử dụng context để hiển thị toast
    const {addItem, loading} = addCartItem();

    const handleAddToCart = async () => {

        count((prevCount) => {
            if (prevCount < maxCart) {
                check = true;
                return prevCount + 1;
            } else return prevCount;
        });

        try {
            // Gửi request thêm vào giỏ
            if (check) {
                await addItem(product_id, 1);
                setShowSuccessToast(true); // Hiển thị toast thành công
            } else setShowErrorAddToast(true);
        } catch (err) {
            console.error("Error adding to cart:", err);
            setShowErrorToast(true); // Hiển thị toast lỗi
        }
    };


    if (loading) return <p>Adding...</p>;

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
