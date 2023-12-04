import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeCart, incrementQuantity, decrementQuantity } from '../../redux/Cart/action';
import { incrementProductQuantity, decrementProductQuantity } from '../../redux/Product/actions';


function CartItem({cart}) {
    const dispatch =useDispatch();
    const products = useSelector(state => state.product)
    
    const removeItemHandlear = (cart) => {
        dispatch(incrementProductQuantity(cart.productId, cart.quantity))
        dispatch(removeCart(cart.id))
    }

    const incrementQuantityHandlear = (cart) => {
        const product = products.filter(prod => prod.id === cart.productId)[0];
        if (product.quantity > 0){
            dispatch(decrementProductQuantity(cart.productId, 1))
            dispatch(incrementQuantity(cart.id))
        }
    }

    const decrementQuantityHandlear = (cart) => {
        if (cart.quantity > 0){
            dispatch(incrementProductQuantity(cart.productId, 1))
            dispatch(decrementQuantity(cart.id))
        }
    }

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">

                <img className="lws-cartImage" src={ cart.imageUrl } alt="product" />

                <div className="space-y-2">
                    <h4 className="lws-cartName">{ cart.name }</h4>
                    <p className="lws-cartCategory">{ cart.category }</p>
                    <p>BDT <span className="lws-cartPrice">{ cart.price }</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">

                <div className="flex items-center space-x-4">
                    <button onClick={() => incrementQuantityHandlear(cart)} className="lws-incrementQuantity">
                        <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="lws-cartQuantity">{ cart.quantity }</span>
                    <button onClick={() => decrementQuantityHandlear(cart)} className="lws-decrementQuantity">
                        <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>

                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{ cart.price * cart.quantity }</span></p>
            </div>

            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button onClick={() => removeItemHandlear(cart)} className="lws-removeFromCart">
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default CartItem;