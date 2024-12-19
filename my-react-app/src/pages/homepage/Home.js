import React from 'react';
import '../../App.scss';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import ProductGrid from "../../components/productgrid/ProductGrid";
import Nav from "../../components/navigation/Nav";
import Header from "../../components/header/Header";
import useProductFilter from "../../hooks/useProductFilter";
import useFetchProducts from "../../api/ProductAPI";
import products from "../../components/Products";

function Home() {
    // const { products, loading, error } = useFetchProducts();
    const {
        count,
        setCount,
        activeOrder,
        selectedCategory,
        filteredProducts,
        handleFilterChange,
        handleSort,
        handleCategoryChange,
    } = useProductFilter(products);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;
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