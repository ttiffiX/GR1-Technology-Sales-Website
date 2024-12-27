import React, {useEffect, useState} from "react";
import Nav from "../../components/navigation/Nav";
import Header from "../../components/header/Header";
import CartGrid from "../../components/cartgrid/CartGrid";
import useProductFilter from "../../hooks/useProductFilter";
import {getCartItems} from "../../api/CartAPI";

function Cart(){

    // Sử dụng hook useCartAPI để lấy các giá trị
    const { cartItems,totalQuantity, loading, error } = getCartItems();
    const [count, setCount] = useState(0);
    const {
        activeOrder,
        selectedCategory,
        filteredProducts,
        handleFilterChange,
        handleSort,
        handleCategoryChange,
    } = useProductFilter(cartItems);
    useEffect(() => {
        // Cập nhật state count khi lấy được totalQuantity từ API
        setCount(totalQuantity);
    }, [totalQuantity]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
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
                modeSearch={"cart"}
            />
            <CartGrid products={filteredProducts} count={setCount}/>
        </>
    )
}
export default Cart