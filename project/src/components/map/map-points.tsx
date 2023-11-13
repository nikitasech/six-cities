import { useRef } from 'react';
import { City } from '../../types/city';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';
import usePoints from '../../hooks/use-points';

type MapPointsProps = {
  city: City;
  offers: Offer[];
}

export default function MapPoints({ city, offers }: MapPointsProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  usePoints(map, offers);

  return <section className="cities__map map" ref={mapRef}></section>;
}
