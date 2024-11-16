import React, {useState} from 'react';
import '../../App.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductGrid from "../../components/productgrid/ProductGrid";
import Nav from "../../components/navigation/Nav";
import Header from "../../components/header/Header";
import useProductFilter from "../../hooks/useProductFilter";

function Home() {
    const {
        count,
        setCount,
        activeOrder,
        selectedCategory,
        filteredProducts,
        handleFilterChange,
        handleSort,
        handleCategoryChange,
    } = useProductFilter();
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