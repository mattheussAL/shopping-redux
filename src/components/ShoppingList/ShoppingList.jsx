import React from 'react';
import { useSelector } from 'react-redux';

import Checkbox from '../../shared/Checkbox';
import { Wrapper, Title, Array } from './ShoppingList.styles';

import selectorAllProducts, {
   selectedSelectProducts
} from '../../store/Products/Products.selectors';

function ShoppingList ({ title, onToggle, displayOnlySelectedProducts }) {
  const products = useSelector(
    displayOnlySelectedProducts
    ? selectedSelectProducts 
    : selectorAllProducts
  );

  return <Wrapper>
    <Title>{ title }:</Title>
    <Array>
      { products.map(product =>
        <Checkbox
          key={product.id}
          value={product.checked}
          title={product.name}
          onClick={() => onToggle(product.id, product.checked, product.name)}
        />
      )}
    </Array>
  </Wrapper>
}

export default ShoppingList
