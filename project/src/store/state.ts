import { AuthStatus, cities, filters } from '../const';
import type { CityName } from '../types/city-name';
import type { Offer } from '../types/offer';
import type { FilterName } from '../types/filter-name';
import { User } from '../types/user';
import { Review } from '../types/review';

export type State = {
  authStatus: AuthStatus;
  isLoading: boolean;
  activeCity: CityName;
  activeFilter: FilterName;
  activeOffer: Offer|null;
  nearbyOffers: Offer[];
  reviews: Review[];
  offers: Offer[];
  user: User|null;
}

export const initialState: State = {
  authStatus: AuthStatus.NoAuth,
  isLoading: true,
  activeCity: cities[0],
  activeFilter: filters[0],
  activeOffer: null,
  nearbyOffers: [],
  reviews: [],
  offers: [],
  user: null
};
