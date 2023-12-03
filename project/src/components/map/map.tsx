import { useRef } from 'react';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';
import usePoints from '../../hooks/use-points';
import { useAppSelector } from '../../hooks/use-app-selector';

export enum PlaceMap {
  MAIN = 'cities',
  OFFER = 'property'
}

type MapProps = {
  place?: PlaceMap;
  offers: Offer[];
  activeOffer: Offer | null;
}

export default function Map({ place = PlaceMap.MAIN, offers, activeOffer }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const activeCity = useAppSelector((state) => state.activeCity);
  const map = useMap(mapRef, activeCity);
  usePoints(map, offers, activeOffer);

  const mapClasses = `${place}__map map`;

  return <section className={mapClasses} ref={mapRef}></section>;
}
