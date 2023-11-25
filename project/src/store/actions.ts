import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../types/city-name';

export const setActiveCity = createAction<CityName>('setActiveCity');
