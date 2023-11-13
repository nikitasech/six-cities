import { useRef } from 'react';
import { City } from '../../types/city';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';
import usePoints from '../../hooks/use-points';

export enum PlaceMap {
  MAIN = 'cities'
}

type MapProps = {
  place?: PlaceMap;
  city: City;
  offers: Offer[];
  activeOffer: Offer | null;
}

export default function Map({ place = PlaceMap.MAIN, city, offers, activeOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  usePoints(map, offers, activeOffer);

  const mapClasses = `${place}__map map`;

  return <section className={mapClasses} ref={mapRef}></section>;
}
