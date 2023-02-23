export const USER_SERVER =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:5000'
    : process.env.BACKEND_URL + '/api/user';
export const PRODUCT_SERVER =
  process.env.NODE_ENV === 'production'
    ? 'http://localhost:5000'
    : process.env.BACKEND_URL + '/api/product';
