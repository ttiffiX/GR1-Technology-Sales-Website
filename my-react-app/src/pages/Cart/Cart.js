import React from "react";
import Nav from "../../components/navigation/Nav";
import Header from "../../components/header/Header";
import {useLocation} from "react-router-dom";
import CartGrid from "../../components/cartgrid/CartGrid";
import useProductFilter from "../../hooks/useProductFilter";
import CartProducts from "../../components/CartProducts";

function Cart(){
    const location = useLocation();
    const count = location.state?.count || 0;
    const {
        // count,
        setCount,
        activeOrder,
        selectedCategory,
        filteredProducts,
        handleFilterChange,
        handleSort,
        handleCategoryChange,
    } = useProductFilter(CartProducts);
    return(
        <>
            <Nav count={count}/>
            <Header
                title="Cart"
                onFilterChange={handleFilterChange}
                activeOrder={activeOrder}
                handleSort={handleSort}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
            />
            <CartGrid products={filteredProducts} setCount={setCount}/>
        </>
    )
}
export default Cart