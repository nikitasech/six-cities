import 'leaflet/dist/leaflet.css';
import { Map, TileLayer } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CityLocation } from '../const';
import { CityName } from '../types/city-name';

const TYLE_PROVIDER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  cityName: CityName
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const city = CityLocation[cityName];
  const isRenderedMap = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedMap.current) {
      const instance = new Map(mapRef.current, {
        zoom: city.zoom,
        scrollWheelZoom: false,
        center: {
          lat: city.latitude,
          lng: city.longitude
        }
      });

      const layer = new TileLayer(TYLE_PROVIDER, { attribution: COPYRIGHT });
      instance.addLayer(layer);
      setMap(instance);
      isRenderedMap.current = true;
    }

    if (isRenderedMap && map) {
      map.fitBounds([[city.latitude, city.longitude]], {
        maxZoom: city.zoom
      });
    }

  }, [mapRef, map, city]);

  return map;
}
