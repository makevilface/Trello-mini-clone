import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../../styles/contentWrapper';

import ToggleThemeButton from './ToggleThemeButton';

const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.background};
`;

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Header = ({ theme, toggleTheme }) => {
  return (
    <StyledHeader>
      <StyledContentWrapper>
        <h1>Its a {theme === 'light' ? 'light theme' : 'dark theme'}! </h1>
        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
      </StyledContentWrapper>
    </StyledHeader>
  );
};

export default Header;
