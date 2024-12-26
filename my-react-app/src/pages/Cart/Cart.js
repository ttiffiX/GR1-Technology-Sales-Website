import React from "react";
import Nav from "../../components/navigation/Nav";
import Header from "../../components/header/Header";
import CartGrid from "../../components/cartgrid/CartGrid";
import useProductFilter from "../../hooks/useProductFilter";
import {getCartItems} from "../../api/CartAPI";

function Cart(){

    // Sử dụng hook useCartAPI để lấy các giá trị
    const { cartItems,totalQuantity, loading, error } = getCartItems();
    const {
        activeOrder,
        selectedCategory,
        filteredProducts,
        handleFilterChange,
        handleSort,
        handleCategoryChange,
    } = useProductFilter(cartItems);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return(
        <>
            <Nav count={totalQuantity}/>
            <Header
                title="Cart"
                onFilterChange={handleFilterChange}
                activeOrder={activeOrder}
                handleSort={handleSort}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
            />
            <CartGrid products={filteredProducts}/>
        </>
    )
}
export default Cart