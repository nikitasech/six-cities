import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const';
import { setActiveCity } from './actions';
import { CityName } from '../types/city-name';

type State = {
  activeCity: CityName;
}

const initialState: State = {
  activeCity: cities[0],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    });
});
