import React from "react";
import Nav from "../../components/navigation/Nav";
import Header from "../../components/header/Header";
import {useLocation} from "react-router-dom";
import ProductGrid from "../../components/productgrid/ProductGrid";
import CARTS from "../../components/CartProducts";

function Cart(){
    const location = useLocation();
    const count = location.state?.count || 0;

    return(
        <>
            <Nav count={count}/>
            <Header
                title="Cart"
                // onFilterChange={handleFilterChange}
                // activeOrder={activeOrder}
                // handleSort={handleSort}
                // selectedCategory={selectedCategory}
                // handleCategoryChange={handleCategoryChange}
            />
            <ProductGrid products={CARTS} setCount={count}/>
        </>
    )
}
export default Cart