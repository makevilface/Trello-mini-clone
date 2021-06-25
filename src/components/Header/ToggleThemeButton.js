import React from 'react';
import styled from 'styled-components';

import MoonIcon from './img/full-moon.png';
import SunIcon from './img/sun.png';

const StyledToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 7rem;
  height: 3.1rem;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  font-size: 0.5rem;
  padding: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  img {
    max-width: 2rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateX(0)' : 'translateX(-100px)')};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateX(100px)' : 'translateX(0)')};
    }
  }
`;

const ToggleThemeButton = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <StyledToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src={SunIcon} alt='Sun icon' title='Sun icon' width='112' height='112' />
      <img src={MoonIcon} alt='Moon icon' title='Moon icon' width='112' height='112' />
    </StyledToggleContainer>
  );
};

export default ToggleThemeButton;
