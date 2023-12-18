import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch } from '../types/store';
import type { AxiosInstance } from 'axios';
import type { Offer } from '../types/offer';
import { setOffers } from './actions';
import type { State } from './state';
import { ServerRoute } from '../const';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(ServerRoute.Offers);
    dispatch(setOffers(data));
  },
);
