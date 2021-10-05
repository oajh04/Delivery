import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  storage,
  key: 'root',
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(rootReducer);
export const persistor = persistStore(store);

export function configureStore() {
  // const store = createStore(enhancedReducer);
  return store;
  // return store;
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
