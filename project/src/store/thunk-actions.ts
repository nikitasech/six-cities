import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch } from '../types/store';
import type { AxiosInstance } from 'axios';
import type { Offer } from '../types/offer';
import { setAuthStatus, setIsLoading, setOffers, setUser } from './actions';
import { AuthStatus, ServerRoute } from '../const';
import { User } from '../types/user';
import { setToken } from '../features/token';
import { LoginData } from '../types/login-data';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
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

export const login = createAsyncThunk<void, LoginData, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'login',
  async (loginData, {dispatch, extra: api}) => {
    await api.post<User>(ServerRoute.Login, loginData)
      .then((response) => {
        setToken(response.data.token);
        dispatch(setAuthStatus(AuthStatus.Auth));
        dispatch(setUser(response.data));
      });
  }
);
