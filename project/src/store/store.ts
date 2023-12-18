import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { offers } from '../mocks/offers';
import { setOffers } from './actions';

export const store = configureStore({ reducer });

store.dispatch(setOffers(offers));
