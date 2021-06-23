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
  const isDarkModeEnabled = useDarkMode();
  const theme = isDarkModeEnabled ? darkTheme : lightTheme;

  return (
    <StyledLayoutWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header></Header>
        {/* Board */}
      </ThemeProvider>
    </StyledLayoutWrapper>
  );
};

export default Layout;
