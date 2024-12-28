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
            return response.data;
        } catch (err) {
            setError(err.message || 'Failed to add item to cart');
            throw err;
        } finally {
            setLoading(false); // Reset trạng thái loading
        }
    };

    return {addItem, loading, error};
};

export const getCartItems = () => {
    const [cartItems, setCartItems] = useState([]);  // Lưu trữ danh sách sản phẩm trong giỏ
    const [loading, setLoading] = useState(true);  // Trạng thái loading
    const [error, setError] = useState(null);  // Trạng thái lỗi
    const [totalQuantity, setTotalQuantity] = useState(0);  // Tổng số lượng hàng hóa

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const {totalQuantity, cartDTO} = await fetchCartItems();
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

    return {cartItems, totalQuantity, loading, error};
};

export const fetchCartItems = async () => {
    const response = await axios.get(`${BASE_URL}/cart`)
    return response.data;
}

export const updateItems = () => {
    const incItems = async (productId, quantity) => {
        try {
            const response = await axios.put(`${BASE_URL}/cart/adjust/increment`, {
                productId,
                quantity,
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to increment item.');
        }
    };

    const decItems = async (productId, quantity) => {
        try {
            const response = await axios.put(`${BASE_URL}/cart/adjust/decrement`, {
                productId,
                quantity,
            });
            return response.data; // Phản hồi từ BE
        } catch (error) {
            throw new Error('Failed to decrement item.');
        }
    }
    return {incItems, decItems};
};

export const removeCartItem = () => {
    const removeItem = async (productId) => {
        try {
            const response = await axios.delete(`${BASE_URL}/cart/remove`, {
                data: { productId },
            });
            return response.data;
        } catch (err) {
            throw new Error('Failed to remove item.');
        }
    }
    return {removeItem};
}

