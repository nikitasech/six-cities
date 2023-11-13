import { useRef } from 'react';
import { City } from '../../types/city';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';
import usePoints from '../../hooks/use-points';

type MapPointsProps = {
  city: City;
  offers: Offer[];
  activeOffer: Offer | null;
}

export default function MapPoints({ city, offers, activeOffer }: MapPointsProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  usePoints(map, offers, activeOffer);

  return <section className="cities__map map" ref={mapRef}></section>;
}
