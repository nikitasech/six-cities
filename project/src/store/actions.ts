import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city-name';
import { Offer } from '../types/offer';
import { FilterName } from '../types/filter-name';

export const setActiveCity = createAction<CityName>('setActiveCity');
export const setOffers = createAction<Offer[]>('setOffers');
export const setActiveFiter = createAction<FilterName>('setActiveFilter');
