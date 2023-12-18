import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createServerAPI } from '../services/server-api';
import { fetchOffers } from './thunk-actions';

const serverAPI = createServerAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: serverAPI
    }
  })
});

store.dispatch(fetchOffers());
