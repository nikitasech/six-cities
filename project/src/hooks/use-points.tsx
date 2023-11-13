import { Map, icon, marker } from 'leaflet';
import { useEffect } from 'react';
import { Offer } from '../types/offer';

export default function usePoints(
  map: Map | null,
  offers: Offer[]
) {
  const defaultCustomIcon = icon({
    iconUrl: './../img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [27, 29],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }, {
        icon: defaultCustomIcon,
      }).addTo(map));
    }

  }, [map, offers, defaultCustomIcon]);
}
