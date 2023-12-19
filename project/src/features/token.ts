type Token = string;

const KEY_NAME = 'six-sities-x-token';

export const setToken = (token: Token) => {
  localStorage.setItem(KEY_NAME, token);
};

export const getToken = () => {
  const token = localStorage.getItem(KEY_NAME);
  return token ?? '';
};

export const deleteToken = () => {
  localStorage.removeItem(KEY_NAME);
};
