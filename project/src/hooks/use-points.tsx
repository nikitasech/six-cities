import { Map, Marker, icon } from 'leaflet';
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
      const markers: Marker[] = [];

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        }, {
          icon: offer.id === activeOffer?.id ? activeCustomIcon : defaultCustomIcon,
        });

        marker.addTo(map);
        markers.push(marker);
      });

      return () => {
        if (map) {
          markers.forEach((marker) => {
            map.removeLayer(marker);
          });
        }
      };
    }
  }, [map, offers, activeOffer]);
}
