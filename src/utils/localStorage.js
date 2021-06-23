export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  if (data !== null) {
    return data;
  }

  return {};
};

export const setLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    if (e.name === 'QUOTA_EXCEEDED_ERR') {
      alert('Memory is full. Cannot save. Maybe delete a few items?');
    } else {
      alert('Something went wrong? Try again later?');
    }
  }
};
