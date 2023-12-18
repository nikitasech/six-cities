import { cities, filters } from '../const';
import type { CityName } from '../types/city-name';
import type { Offer } from '../types/offer';
import type { FilterName } from '../types/filter-name';

export type State = {
  activeCity: CityName;
  activeFilter: FilterName;
  offers: Offer[];
}

export const initialState: State = {
  activeCity: cities[0],
  activeFilter: filters[0],
  offers: []
};
