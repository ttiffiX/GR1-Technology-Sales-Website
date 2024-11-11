import React, {useState} from 'react';
import '../../styles/App.scss';
import CartClicked from "../utils/CartClicked";
import SearchBar from "../utils/SearchBar"
import HandleDate from "./homefunction/HandleDate";
import PRODUCTS from "../MyComponent/Product";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HandleLogin from "../utils/HandleLogin";
import ProductGrid from "./homefunction/ProductGrid";
import {filterProducts, sortProducts} from "../utils/FilterProduct";
import Nav from "../utils/Nav";

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
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Nav count={count}/>

            <div className={"header"}>
                <div className={"product"}>
                    <span>Product</span>
                </div>
                <HandleDate/>
                <SearchBar onFilterChange={handleFilterChange}/>

                <button
                    className={`chip-price chip-price-asc ${activeOrder === 'asc' ? 'active' : ''}`}
                    onClick={() => handleSort('asc')}
                >
                    <span className="chip-price-text">Price ASC</span>
                </button>
                <button
                    className={`chip-price chip-price-desc ${activeOrder === 'desc' ? 'active' : ''}`}
                    onClick={() => handleSort('desc')}
                >
                    <span className="chip-price-text">Price DESC</span>
                </button>

                <div className={"dropdown"}>
                    <button className={"chip-list"}>
                        <span>List View</span>
                    </button>

                    <div className="dropdown-content">
                        <button
                            className={`category-btn ${selectedCategory === 'Laptop' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('Laptop')}>Laptop
                        </button>
                        <button className={`category-btn ${selectedCategory === 'Keyboard' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('Keyboard')}>Keyboard
                        </button>
                        <button
                            className={`category-btn ${selectedCategory === 'Mouse' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('Mouse')}>Mouse
                        </button>
                        <button
                            className={`category-btn ${selectedCategory === '' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('')}>All Products
                        </button>
                    </div>
                </div>
                <div className={"divider"}/>
            </div>

            <ProductGrid products={filteredProducts} setCount={setCount}/>

        </div>
    );
}

export default Home