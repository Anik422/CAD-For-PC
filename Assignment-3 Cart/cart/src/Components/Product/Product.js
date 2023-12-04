import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Cart/action';
import { decrementProductQuantity } from '../../redux/Product/actions';

function Product({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        if (product.quantity > 0) {
            dispatch(addToCart(product));
            dispatch(decrementProductQuantity(product.id));
        };
    };
    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={product.imageUrl} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{product.name}</h4>
                <p className="lws-productCategory">{product.category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{product.price}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{product.quantity}</span></p>
                </div>
                <button
                    className="lws-btnAddToCart"
                    onClick={() => handleAddToCart(product)}
                    disabled = {product.quantity <= 0 ? true : false}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;