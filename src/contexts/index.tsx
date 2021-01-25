import React from 'react';

import StoreProvider from './StoreContext';

const AppProvider: React.FC = ({ children }) => (
    <StoreProvider>
        {children}
    </StoreProvider>
);

export default AppProvider;