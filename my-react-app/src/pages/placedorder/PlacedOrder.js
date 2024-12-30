// PlacedOrder.js
import React from 'react';
import './PlacedOrder.scss';
import Nav from "../../components/navigation/Nav";
import {getCartItems} from "../../api/CartAPI";
import Header from "../../components/header/Header";
import {getOrders} from "../../api/OrderAPI";

const PlacedOrder = () => {
    const {totalQuantity} = getCartItems();
    const {orders, orderDetails, loading, error} = getOrders();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const handleCancelOrder = () => {
        console.log("Order cancelled");
    };

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
        <>
            <Nav count={totalQuantity}/>
            <Header
                title="Ordered"
                modeDisplay="order"
            />
            <div className="placed-order-container">
                {orders.map((order) => {
                    // Lọc ra các orderDetails có order_id trùng với order.orderId
                    const orderItems = orderDetails.filter((item) => item.orderId === order.order_id);

                    return (
                        <div className="outer-grid" key={order.order_id}>
                            <div className="inner-grid">
                                {orderItems.map((item) => (
                                    <div className="product-card" key={item.orderDetailId}>
                                        <div className="product-image"
                                             style={{backgroundImage: `url(${getImage(item.image)})`}}></div>
                                        <div className="product-details">
                                            <h4 className="product-name">{item.name}</h4>
                                            <p className="product-price">Price: {formatPrice(item.price)}</p>
                                            <p className="product-quantity">Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Thông tin đơn hàng */}
                            <div className="order-summary">
                                <p>Total Price: <strong>{formatPrice(order.totalPrice)}</strong></p>
                                <p>Status: <strong>{order.status}</strong></p>
                                <button className="cancel-order-button" onClick={handleCancelOrder}>
                                    Cancel Order
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

        </>
    );
};

export default PlacedOrder;
