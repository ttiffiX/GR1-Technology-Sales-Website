import React, {useState} from "react";
import PRODUCTS from "../components/Products";
import {updateFilteredProducts} from "../utils/FilterProduct";

function useProductFilter() {
    const [count, setCount] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [activeOrder, setActiveOrder] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);


    // Hàm xử lý lọc sản phẩm
    const handleFilterChange = (searchText, inStockOnly) => {
        setSearchText(searchText);
        setInStockOnly(inStockOnly);
        const updateProducts = updateFilteredProducts(searchText, inStockOnly, selectedCategory, activeOrder);
        setFilteredProducts(updateProducts);
    };

    // Hàm xử lý khi nhấn vào nút "Price ASC" hoặc "Price DESC"
    const handleSort = (order) => {
        setActiveOrder(order);
        const updateProducts = updateFilteredProducts(searchText, inStockOnly, selectedCategory, order);
        setFilteredProducts(updateProducts);
    };

    // Hàm xử lý khi chọn category
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        const updateProducts = updateFilteredProducts(searchText, inStockOnly, category, activeOrder);
        setFilteredProducts(updateProducts);
    };

    return {
        count,
        setCount,
        activeOrder,
        selectedCategory,
        filteredProducts,
        handleFilterChange,
        handleSort,
        handleCategoryChange,
    };
}

export default useProductFilter