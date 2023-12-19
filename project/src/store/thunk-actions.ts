import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch } from '../types/store';
import type { AxiosInstance } from 'axios';
import type { Offer } from '../types/offer';
import { setAuthStatus, setIsLoading, setOffers } from './actions';
import type { State } from './state';
import { AuthStatus, ServerRoute } from '../const';
import { User } from '../types/user';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(checkAuthStatus());
    dispatch(setIsLoading(true));
    const {data} = await api.get<Offer[]>(ServerRoute.Offers);
    dispatch(setIsLoading(false));
    dispatch(setOffers(data));
  },
);

export const checkAuthStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuthStatus',
  async (_arg, {dispatch, extra: api}) => {
    await api.get<User>(ServerRoute.Login)
      .then((data) => {
        dispatch(setAuthStatus(AuthStatus.Auth));
      })
      .catch((err) => {
        dispatch(setAuthStatus(AuthStatus.NoAuth));
      });

  },
);
