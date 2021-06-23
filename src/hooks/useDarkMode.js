import React from 'react';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage';

const useDarkMode = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setLocalStorage('theme', 'dark');
    } else {
      setTheme('light');
      setLocalStorage('theme', 'light');
    }
  };

  React.useEffect(() => {
    const localTheme = String(getLocalStorage('theme'));
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setLocalStorage('theme', 'light');
    }
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
