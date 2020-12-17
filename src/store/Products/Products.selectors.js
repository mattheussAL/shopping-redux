const selectorAllProducts = state => state.products;

export const selectedSelectProducts = 
  state => state.products.filter(product => product.checked);

export const selectSelectedProductsTotalPrice =  
  state => state.products
  .filter(product =>  product.checked)
  .reduce((a, b) => a + b.price, 0)
;

export default selectorAllProducts;

