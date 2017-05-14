const API_PREFIX = '/api/';

function api(url) {
  return API_PREFIX + url;
}
export function products(location) {
  return api(`products/${location}`);
}
export function location(customerId) {
  return api(`location/${customerId}`);
}