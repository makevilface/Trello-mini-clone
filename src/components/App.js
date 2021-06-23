import React from 'react';

import Layout from './Layout';

import GlobalStateProvider from '../context/provider';

const App = () => {
  const globalState = {
    darkMode: false,
  };

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>Here will be all content</Layout>
    </GlobalStateProvider>
  );
};

export default App;
