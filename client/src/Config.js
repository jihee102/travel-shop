export const USER_SERVER =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:5000'
    : 'https://travel-shop.onrender.com' + '/api/user';
export const PRODUCT_SERVER =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:5000'
    : 'https://travel-shop.onrender.com' + '/api/product';
