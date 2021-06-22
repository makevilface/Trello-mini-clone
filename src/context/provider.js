import React from 'react';

import Context from './index';

const GlobalStateProvider = ({ initialState, children }) => {
  const [state, setState] = React.useState(initialState);

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};

export default GlobalStateProvider;
