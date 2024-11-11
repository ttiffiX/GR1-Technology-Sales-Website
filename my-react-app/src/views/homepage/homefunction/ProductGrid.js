// MyComponent/ProductGrid.js
import React from 'react';
import AddToCart from '../homefunction/AddToCart';
import '../../../styles/App.scss';

function ProductGrid({ products, setCount }) {
    // Hàm định dạng giá (thêm dấu phân cách cho giá)
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + ' đ'; // Định dạng giá theo kiểu Việt Nam
    };
    return (
        <div className="product-grid">
            {products.map((product) => (
                    <div className={`product-item ${product.stocked ? '' : 'out-of-stock'}`} key={product.name}>
                    <div className="pic" style={{ backgroundImage: `url(${product.image})` }}></div>
                    <div className="techName">{product.name}</div>
                    <div className="price">{formatPrice(product.price)}</div>
                    <AddToCart setCount={setCount} stocked={product.stocked} />
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;
