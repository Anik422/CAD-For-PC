import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


function CartList() {
    const carts = useSelector(state => state.cart);

    return (
        <div className="space-y-6">
            {carts? carts.map((cart) => <CartItem key={cart.id} cart={cart} /> ): "Your cart is empty !"}
            
        </div>
    )
}

export default CartList;