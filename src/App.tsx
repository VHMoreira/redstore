import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from "./shared/styles/global";
import Routes from './routes';
import { ThemeProvider } from 'styled-components';
import { COLORS } from './shared/constants/theme.constants';
import AppProvider from './contexts';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ colors: COLORS }}>
        <Router>
          <AppProvider>
            <Routes />
          </AppProvider>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
