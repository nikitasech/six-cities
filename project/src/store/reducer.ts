import { createReducer } from '@reduxjs/toolkit';
import { setActiveCity, setActiveFiter, setActiveOffer, setAuthStatus, setUser } from './actions';
import { initialState } from './state';
import { featchNearby, featchOffer, fetchOffers, fetchReviews } from './thunk-actions';

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setActiveFiter, (state, action) => {
      state.activeFilter = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(featchOffer.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(featchOffer.fulfilled, (state, action) => {
      state.activeOffer = action.payload;
      state.isLoading = false;
    })
    .addCase(featchOffer.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.offers = action.payload;
    })
    .addCase(featchNearby.fulfilled, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
    });
});
