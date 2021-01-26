import React, { createContext, useCallback, useState } from 'react';

interface Item {
    // id: string;
    quantity: number;
    name: string;
    value: number;
}

interface Pokemon {
    name: string;
    value: number;
}

interface CartContextData {
    items: Item[];
    addToCart(pokemon: Pokemon): Promise<void>;
}

interface CartContextState {
    items: Item[];
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<CartContextState>(() => {
        const cartItens = localStorage.getItem('@redstore:cartitem');

        if (cartItens) {
            return JSON.parse(cartItens);
        }

        return { items: [] } as CartContextState;
    });

    const addToCart = useCallback(async (pokemon: Pokemon) => {
        const itensInCart = [...data.items];
        const existsInCart = itensInCart.find(i => i.name === pokemon.name);

        if (existsInCart) {
            const originalValue = existsInCart.value / existsInCart.quantity;
            existsInCart.quantity = existsInCart.quantity + 1;
            existsInCart.value = existsInCart.quantity * originalValue;
        } else {
            itensInCart.push({
                name: pokemon.name,
                quantity: 1,
                value: pokemon.value * 1
            })
        }

        setData({ items: itensInCart });

    }, [data]);

    return (
        <CartContext.Provider value={{ items: data.items, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider as default, CartContext };