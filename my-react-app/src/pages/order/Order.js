import React, {useEffect, useState} from 'react';
import './Order.scss';
import Nav from "../../components/navigation/Nav";
import Header from "../../components/header/Header";
import {getCartItems} from "../../api/CartAPI";
import {useToast} from "../../components/Toast/Toast";
import {PlaceOrder} from "../../api/OrderAPI";

const Order = () => {
    const {triggerToast} = useToast();
    const {cartItems, totalQuantity} = getCartItems();
    const {getInfoOrders} = PlaceOrder();

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

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        // Thực hiện logic đặt hàng ở đây (gửi dữ liệu đến server hoặc xử lý local)
        console.log("Name:", formData.name);
        console.log("Phone:", formData.phone);
        console.log("Address:", formData.address);
        try{
            const response = await getInfoOrders(formData.name, formData.phone, formData.address);
            console.log(response);
            triggerToast("success", response);
        }catch (err){
            triggerToast("error", err);
        }

    };

    const [profile, setProfile] = useState({
        name: "Sang Phạm",  // Tên mặc định từ profile hoặc null
        phone: null, // Số điện thoại từ profile hoặc null
        address: "unknown", // Địa chỉ từ profile hoặc null
    });

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
    });

    useEffect(() => {
        // Khi profile có dữ liệu, đổ vào form nhưng cho phép sửa
        setFormData({
            name: profile.name || "",
            phone: profile.phone || "",
            address: profile.address || "",
        });
    }, [profile]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <>
            <Nav count={totalQuantity}/>;
            <Header
                title="Order"
                modeDisplay="order"
            />
            {cartItems.length > 0 ? (
                <div className={"orderPage"}>
                    {/* Form nhập thông tin khách hàng */}
                    <form className={"customerForm-order"} onSubmit={handlePlaceOrder}>
                        <h2>Delivery Information</h2>
                        <div className={"inputContainer"}>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className={"inputContainer"}>
                            <label>Phone:</label>
                            <input
                                type="tel"
                                maxLength={11}
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                pattern="^0[0-9]{9,10}$"
                                required
                            />
                        </div>
                        <div className={"inputContainer"}>
                            <label>Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                placeholder="Address"
                                required
                            />
                        </div>
                        {/*</form>*/}
                        <div className={"checkout-order"}>
                            <div className={"totalPrice"}>
                                <p>Total
                                    Price(Freeship): {formatPrice(cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0))}</p>
                            </div>
                            <button type="submit">Place Order</button>
                        </div>
                    </form>

                    {/* Hiển thị giỏ hàng */}
                    <div className={"cart-order"}>
                        <h2>Products</h2>
                        <div className={"cartItems"}>
                            {cartItems.map((item) => (
                                <div key={item.cartId} className={"cartItem"}>
                                    {/*<img src={item.image} alt={item.name}/>*/}
                                    <div className="cart-pic"
                                         style={{backgroundImage: `url(${getImage(item.image)})`}}></div>
                                    <div className={"details"}>
                                        <h3>{item.name}</h3>
                                        <p>Price: {formatPrice(item.price)}</p>
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div/>
            )}
        </>
    );
};

export default Order;
