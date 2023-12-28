import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch } from '../types/store';
import type { AxiosError, AxiosInstance } from 'axios';
import type { Offer } from '../types/offer';
import { setAuthStatus, setIsLoading, setOffers, setUser } from './actions';
import { AuthStatus, ServerRoute } from '../const';
import { User } from '../types/user';
import { deleteToken, setToken } from '../features/token';
import { LoginData } from '../types/login-data';
import { OfferID } from '../types/offer-id';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setIsLoading(true));
    const {data} = await api.get<Offer[]>(ServerRoute.Offers);
    dispatch(setIsLoading(false));
    dispatch(setOffers(data));
  },
);

export const featchOffer = createAsyncThunk<Offer, OfferID, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'fetchOffer',
  async (offerID, {dispatch, extra: api}) => await api
    .get<Offer>(`${ServerRoute.Offers}/${offerID}`)
    .then((response) => response.data)
    .catch((err) => {
      const axiosError = err as AxiosError;
      return Promise.reject(axiosError);
    })
);

export const checkAuthStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'checkAuthStatus',
  async (_arg, {dispatch, extra: api}) => {
    await api.get<User>(ServerRoute.Login)
      .then((response) => {
        dispatch(setAuthStatus(AuthStatus.Auth));
        dispatch(setUser(response.data));
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
        dispatch(fetchOffers());
      });
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ServerRoute.Logout);
    deleteToken();
    dispatch(setAuthStatus(AuthStatus.NoAuth));
    dispatch(setUser(null));
    dispatch(fetchOffers());
  }
);
