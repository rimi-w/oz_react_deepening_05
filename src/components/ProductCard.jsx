import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <>
            {product.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p className="price">₩{product.price.toLocaleString()}</p>
                    <button onClick={() => addToCart(product)}>장바구니 추가</button>
                </div>
            ))}
        </>
    );
};

export default ProductCard;
