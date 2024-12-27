import axios from 'axios';
import {useEffect, useState} from "react";

const BASE_URL = 'http://localhost:8080';

export const addCartItem = () => {
    const [loading, setLoading] = useState(false); // Trạng thái loading
    const [error, setError] = useState(null); // Trạng thái lỗi

    const addItem = async (productId, quantity) => {
        setLoading(true);
        setError(null); // Reset lỗi trước khi gọi API
        try {
            const response = await axios.post(`${BASE_URL}/cart/add`, {
                productId,
                quantity,
            });
            console.log(response.data);
            return response;
        } catch (err) {
            console.error('Error adding to cart:', err);
            setError(err.message || 'Failed to add item to cart'); // Cập nhật lỗi
            throw err; // Ném lỗi để component sử dụng hàm này có thể xử lý
        } finally {
            setLoading(false); // Reset trạng thái loading
        }
    };

    return { addItem, loading, error };
};

export const getCartItems = () => {
    const [cartItems, setCartItems] = useState([]);  // Lưu trữ danh sách sản phẩm trong giỏ
    const [loading, setLoading] = useState(true);  // Trạng thái loading
    const [error, setError] = useState(null);  // Trạng thái lỗi
    const [totalQuantity, setTotalQuantity] = useState(0);  // Tổng số lượng hàng hóa

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const { totalQuantity, cartDTO } = await fetchCartItems();
                setCartItems(cartDTO);
                setTotalQuantity(totalQuantity)
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };
        fetchCart();
    }, []);

    return { cartItems, totalQuantity, loading, error };
};

export const fetchCartItems = async () => {
    const response = await axios.get(`${BASE_URL}/cart`)
    return response.data;
}
