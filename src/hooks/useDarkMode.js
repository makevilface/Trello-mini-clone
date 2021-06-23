import React from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
    }
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
