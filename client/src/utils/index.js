const CART_KEY = 'cart';
const TOKEN_KEY = 'token';

export const displayTotalPrice = items => {
  return `${items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2)} $`;
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

// Auth
export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};
