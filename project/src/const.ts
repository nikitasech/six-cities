import type { CityName } from './types/city-name';
import type { Location } from './types/location';
import type { FilterName } from './types/filter-name';
import type { Offer } from './types/offer';

export const filters: string[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
export const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const Comporator: {
  [key in FilterName]: (a: Offer, b: Offer) => number
} = {
  [filters[0]]: () => 0,
  [filters[1]]: (a, b) => a.price - b.price,
  [filters[2]]: (a, b) => b.price - a.price,
  [filters[3]]: (a, b) => b.rating - a.rating,
};

export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer',
  Login = '/login',
}

export enum ServerRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = 'logout'
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
