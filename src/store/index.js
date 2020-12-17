import { createStore, combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import calculatorReducer from './Calculator/Calculator.reducer';
import productsReducer from './Products/Products.reducer';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);