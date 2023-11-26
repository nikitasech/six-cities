import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city-name';
import { Offer } from '../types/offer';

export const setActiveCity = createAction<CityName>('setActiveCity');
export const setOffers = createAction<Offer[]>('setOffers');
