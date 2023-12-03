import { CityName } from './types/city-name';
import { Location } from './types/location';

export const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer',
  Login = '/login'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const CityLocation: { [key in CityName]: Location } = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 12
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 12
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 12
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 12
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 12
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 12
  },
};
