export const getLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);

    if (data === null) {
      return undefined;
    }
    return JSON.parse(data);
  } catch (error) {
    return undefined;
  }
};

export const setLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch {}
};
