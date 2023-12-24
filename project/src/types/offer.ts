import { City } from './city';
import { Location } from './location';
import { OfferID } from './offer-id';
import { User } from './user';

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: OfferID;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}
