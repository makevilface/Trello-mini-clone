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
  h1 {
    margin: 0 auto;
  }
`;

const Header = ({ theme, toggleTheme }) => {
  return (
    <StyledHeader>
      <StyledContentWrapper>
        <h1>Mini Trello clone 🥥</h1>
        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
      </StyledContentWrapper>
    </StyledHeader>
  );
};

export default Header;
