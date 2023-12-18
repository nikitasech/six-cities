import { createReducer } from '@reduxjs/toolkit';
import { setActiveCity, setActiveFiter, setIsLoading, setOffers } from './actions';
import { initialState } from './state';

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsLoading, (state, action) => {
      state.isLoading = action.payload;
    })
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
