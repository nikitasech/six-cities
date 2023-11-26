import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const';
import { setActiveCity, setOffers } from './actions';
import { CityName } from '../types/city-name';
import { Offer } from '../types/offer';

type State = {
  activeCity: CityName;
  offers: Offer[];
}

const initialState: State = {
  activeCity: cities[0],
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
