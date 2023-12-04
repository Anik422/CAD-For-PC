import React from 'react';
import ProductList from './ProductList';
import CreateProduct from './CreateProduct';

function ProductPage() {
    return (
        <main className="py-16">
            <div className="productWrapper">
                <ProductList />
                <CreateProduct />
            </div>
        </main>
    )
}

export default ProductPage