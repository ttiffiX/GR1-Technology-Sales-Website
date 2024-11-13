import React, {useState} from 'react';
import '../../App.scss';
import PRODUCTS from "../../components/Product";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductGrid from "../../components/productgrid/ProductGrid";
import {filterProducts, sortProducts} from "../../utils/FilterProduct";
import Nav from "../../components/navigation/Nav";
import Header from "../../components/header/Header";

function Home() {
    const [count, setCount] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [activeOrder, setActiveOrder] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

    // Hàm cập nhật bộ lọc sản phẩm
    const updateFilteredProducts = (searchText, inStockOnly, category, order) => {
        let filtered = filterProducts(PRODUCTS, searchText, inStockOnly, category);
        if (order) {
            filtered = sortProducts(filtered, order);
        }
        setFilteredProducts(filtered);
    };

    // Hàm xử lý lọc sản phẩm
    const handleFilterChange = (searchText, inStockOnly) => {
        setSearchText(searchText);
        setInStockOnly(inStockOnly);
        updateFilteredProducts(searchText, inStockOnly, selectedCategory, activeOrder);
    };

    // Hàm xử lý khi nhấn vào nút "Price ASC" hoặc "Price DESC"
    const handleSort = (order) => {
        setActiveOrder(order);
        updateFilteredProducts(searchText, inStockOnly, selectedCategory, order);
    };

    // Hàm xử lý khi chọn category
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        updateFilteredProducts(searchText, inStockOnly, category, activeOrder);
    };

    return (
        <div className={"MyApp"}>

            <Nav count={count}/>

            <Header
                title="Product"
                onFilterChange={handleFilterChange}
                activeOrder={activeOrder}
                handleSort={handleSort}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
            />


            <ProductGrid products={filteredProducts} setCount={setCount}/>

        </div>
    );
}

export default Home