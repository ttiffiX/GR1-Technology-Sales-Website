import React from 'react';
import AddToCart from '../../utils/AddToCart';
import './ProductGrid.scss';

function ProductGrid({products, count}) {
    // Hàm định dạng giá (thêm dấu phân cách cho giá)
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + ' đ'; // Định dạng giá theo kiểu Việt Nam
    };

    const getImage = (imageName) => {
        try {
            return require(`../../assets/images/${imageName}`);
        } catch (error) {
            return ''; // Trả về đường dẫn mặc định nếu không tìm thấy ảnh
        }
    };
    
    return (
        <div className="product-grid">
            {products.map((product) => (
                <div className={`product-item ${product.stocked ? '' : 'out-of-stock'}`} key={product.productId}>
                    <div className="pic" style={{backgroundImage: `url(${getImage(product.image)})`}}></div>
                    <div className="techName">{product.name}</div>
                    <div className="price">{formatPrice(product.price)}</div>
                    <AddToCart productId={product.productId} count={count} stocked={product.stocked}/>
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;
