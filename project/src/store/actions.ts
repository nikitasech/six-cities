import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city-name';
import { Offer } from '../types/offer';
import { FilterName } from '../types/filter-name';
import { AuthStatus } from '../const';
import { User } from '../types/user';

export const setAuthStatus = createAction<AuthStatus>('setAuthStatus');
export const setActiveCity = createAction<CityName>('setActiveCity');
export const setActiveFiter = createAction<FilterName>('setActiveFilter');
export const setUser = createAction<User|null>('setUser');
export const setActiveOffer = createAction<Offer|null>('setActiveOffer');
