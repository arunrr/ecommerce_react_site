const CART_KEY = 'cart';
const TOKEN_KEY = 'jwt';

export const displayTotalPrice = items => {
  return `${items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2)} $`;
};

export const calculateAmount = items => {
  return Number(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
  );
};

// Cart
// store cart items locally
export const setCart = (value, cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
};

// get cartitems from localStorage
export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};

// clear cart from localStorage
export const clearCart = (cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.removeItem(cartKey);
  }
};

// Auth
// set jwt to localStorage
export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};

// get jwt from localStorage
export const getToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage && localStorage.getItem(tokenKey)) {
    return JSON.parse(localStorage.getItem(tokenKey));
  }
  return null;
};

// clear jwt from localStorage
export const clearToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.removeItem(tokenKey);
  }
};
