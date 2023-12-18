import { createReducer } from '@reduxjs/toolkit';
import { setActiveCity, setActiveFiter, setOffers } from './actions';
import { initialState } from './state';

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setActiveFiter, (state, action) => {
      state.activeFilter = action.payload;
    });
});
