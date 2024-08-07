import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemToCart = (item, quantity) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem => 
                cartItem.id === item.id 
                ? { ...cartItem, quantity: cartItem.quantity + quantity } 
                : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, getTotalItems }}>
            {children}
        </CartContext.Provider>
    );
};


