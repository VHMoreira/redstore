import React from 'react';

import StoreProvider from './StoreContext';
import CartProvider from './CartContext';

const AppProvider: React.FC = ({ children }) => (
    <StoreProvider>
        <CartProvider>
            {children}
        </CartProvider>
    </StoreProvider>
);

export default AppProvider;