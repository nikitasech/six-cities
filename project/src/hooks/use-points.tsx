import { Map, icon, marker } from 'leaflet';
import { useEffect } from 'react';
import { Offer } from '../types/offer';

const defaultCustomIcon = icon({
  iconUrl: './../img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 29],
});

const activeCustomIcon = icon({
  iconUrl: './../img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 29],
});

export default function usePoints(
  map: Map | null,
  offers: Offer[],
  activeOffer: Offer | null
) {
  useEffect(() => {
    if (map) {
      offers.forEach((offer) => marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      }, {
        icon: offer.id === activeOffer?.id ? activeCustomIcon : defaultCustomIcon,
      }).addTo(map));
    }

  }, [map, offers, activeOffer]);
}
