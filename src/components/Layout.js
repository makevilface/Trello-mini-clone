import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { useDarkMode } from '../hooks';

import Header from './Header';

import GlobalStyles from '../styles/globalStyles';
import { lightTheme, darkTheme } from '../styles/theme';

const StyledLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledLayoutWrapper>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme}></Header>
        {children}
      </ThemeProvider>
    </StyledLayoutWrapper>
  );
};

export default Layout;
