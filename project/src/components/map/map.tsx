import { useRef } from 'react';
import { City } from '../../types/city';
import useMap from '../../hooks/use-map';

type ListMapProps = {
  city: City;
}

export default function ListMap({ city }: ListMapProps): JSX.Element {
  const mapRef = useRef(null);
  useMap(mapRef, city);

  return <section className="cities__map map" ref={mapRef}></section>;
}
