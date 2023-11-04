import 'leaflet/dist/leaflet.css';
import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useState } from 'react';
import { City } from '../types/city';

const TYLE_PROVIDER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    let instance = map;

    if (mapRef.current !== null && map === null) {
      instance = new Map(mapRef.current, {
        zoom: city.location.zoom,
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        }
      });

      const layer = new TileLayer(TYLE_PROVIDER, { attribution: COPYRIGHT });
      instance.addLayer(layer);
      setMap(instance);
    }

    return () => {
      instance?.remove();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapRef, city]);

  return map;
}
