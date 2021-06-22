import React from 'react';

import GlobalStateProvider from '../context/provider';

const App = () => {
  const globalState = {
    darkMode: false,
  };

  return <GlobalStateProvider initialState={globalState}></GlobalStateProvider>;
};

export default App;
