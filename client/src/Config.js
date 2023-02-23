export const USER_SERVER =
  process.env.NODE_ENV === 'production'
    ? 'https://travel-shop.onrender.com' + '/api/user'
    : 'http://localhost:5000' + '/api/user';
export const PRODUCT_SERVER =
  process.env.NODE_ENV === 'production'
    ? 'https://travel-shop.onrender.com' + '/api/product'
    : 'http://localhost:5000' + '/api/product';
// export const USER_SERVER = '/api/user';
// export const PRODUCT_SERVER = '/api/product';

export const BACKEND_URL = process.env.REACT_APP_SERVER_URL;
