import React, {useEffect, useState} from 'react';
import './CartGrid.scss';

function CartGrid({products}) {
    // Hàm định dạng giá (thêm dấu phân cách cho giá)
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + ' đ'; // Định dạng giá theo kiểu Việt Nam
    };

    // Quản lý sản phẩm trong local state
    const [localProducts, setLocalProducts] = useState([]);

    // Đồng bộ `localProducts` với `products` từ props khi props thay đổi
    useEffect(() => {
        setLocalProducts(products.map((product) => ({ ...product })));
    }, [products]);


    const getImage = (imageName) => {
        try {
            return require(`../../assets/images/${imageName}`);
        } catch (error) {
            return ''; // Trả về đường dẫn mặc định nếu không tìm thấy ảnh
        }
    };

    const handleDecrease = (productId) => {
        // setProducts((prevProducts) =>
        //     prevProducts.map((product) =>
        //         product.productId === productId && product.quantity > 1
        //             ? { ...product, quantity: product.quantity - 1 }
        //             : product
        //     )
        // );
    };

    const handleIncrease = (productId) => {
        setLocalProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.productId === productId
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };


    return (
        <div className="cart-grid">
            {localProducts.map((product) => (
                <div className="cart-item" key={product.cartId}>
                    <button className="cart-delete-button">
                        X
                    </button>
                    <div className="cart-pic" style={{backgroundImage: `url(${getImage(product.image)})`}}></div>
                    <div className={"cart-content"}>
                        <div className="cart-techName">{product.name}</div>
                        <div className="cart-price">{formatPrice(product.price)}</div>
                        <div className="cart-actions">
                            <button className="quantity-btn" onClick={handleDecrease}>-</button>
                            <div className="quantity-value">{product.quantity}</div>
                            <button className="quantity-btn" onClick={handleIncrease}>+</button>
                        </div>

                    </div>
                </div>
            ))}
            <div className="checkout-summary-placeOrder">
                <div className="header-placeOrder">Total</div>
                <div className="total-container-placeOrder">
                    {/*<span className="label-placeOrder">Total:</span>*/}
                    <span className="amount-placeOrder">{formatPrice(20000000)}</span>
                </div>
                <button className="payment-button-placeOrder">
                    Place Order
                    <div className="icon-placeOrder">→</div>
                </button>
            </div>
        </div>
    );
}

export default CartGrid;
