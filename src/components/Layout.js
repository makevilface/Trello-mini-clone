import React from 'react';

import styled, { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../styles/theme';

import Header from './Header';

import { useDarkMode } from '../hooks';
import GlobalStyles from '../styles/globalStyles';

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
