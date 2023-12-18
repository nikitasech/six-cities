import { createReducer } from '@reduxjs/toolkit';
import { cities, filters } from '../const';
import { setActiveCity, setActiveFiter, setOffers } from './actions';
import { CityName } from '../types/city-name';
import { Offer } from '../types/offer';
import { FilterName } from '../types/filter-name';

type State = {
  activeCity: CityName;
  activeFilter: FilterName;
  offers: Offer[];
}

const initialState: State = {
  activeCity: cities[0],
  activeFilter: filters[0],
  offers: []
};

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
