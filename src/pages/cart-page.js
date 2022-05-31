import React from 'react';
import Cart from "../components/Cart/Cart";

const CartPage = ({cartItems,onAddItem,onRemoveItem, onRemoveFromCart}) => {
    return (
        <div>
            <Cart
                cartItems={cartItems}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
                onRemoveFromCart={onRemoveFromCart}
            />
        </div>
    );
};

export default CartPage;