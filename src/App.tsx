import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Router>
        {/* <AppProvider> */}
        <Routes />
        {/* </AppProvider> */}
      </Router>
    </>
  );
}

export default App;
