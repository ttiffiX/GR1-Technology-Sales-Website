import React from 'react';
import './CartGrid.scss';

function CartGrid({products, setCount}) {
    // Hàm định dạng giá (thêm dấu phân cách cho giá)
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + ' đ'; // Định dạng giá theo kiểu Việt Nam
    };

    const getImage = (imageName) => {
        try {
            return require(`../../assets/images/${imageName}`);
        } catch (error) {
            return ''; // Trả về đường dẫn mặc định nếu không tìm thấy ảnh
        }
    };

    return (
        <div className="cart-grid">
            {products.map((product) => (
                <div className="cart-item" key={product.product_id}>
                    <div className="cart-pic" style={{backgroundImage: `url(${getImage(product.image)})`}}></div>
                    <div className={"cart-content"}>
                        <div className="cart-techName">{product.name}</div>
                        <div className="cart-price">{formatPrice(product.price)}</div>
                        <div className="cart-actions">
                            <button className="quantity-btn">-</button>
                            <div className="quantity-value">1</div>
                            <button className="quantity-btn">+</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="checkout-summary-placeOrder">
                <div className="header-placeOrder">Order summary</div>
                <div className="total-container-placeOrder">
                    <span className="label-placeOrder">Total:</span>
                    <span className="amount-placeOrder">{formatPrice(20000000)}</span>
                </div>
                <button className="payment-button-placeOrder">
                    Place Order
                    <div className="icon-placeOrder">-></div>
                </button>
            </div>
        </div>
    );
}

export default CartGrid;
