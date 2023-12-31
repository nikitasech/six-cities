import Header from '../../components/header/header';
import OfferCard, { PlaceOfferCard } from '../../components/offer-card/offer-card';
import { Offer } from '../../components/offer/offer';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { featchNearby, featchOffer } from '../../store/thunk-actions';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/use-app-selector';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { Loader } from '../../components/loader/loader';

export default function OfferScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const isRenderNav = true;
  const isLoading = useAppSelector((state) => state.isLoading);
  const currentOffer = useAppSelector((state) => state.activeOffer);
  const nearOffers = useAppSelector((state) => state.nearbyOffers);
  const currentOfferID = Number(useParams().id);

  useEffect(() => {
    dispatch(featchOffer(currentOfferID));
    dispatch(featchNearby(currentOfferID));
  }, [currentOfferID, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (!currentOffer) {
    return <NotFoundScreen />;
  }

  return (
    <div className="page">
      <Header isRenderNav={isRenderNav} />
      <main className="page__main page__main--property">
        <Offer currentOffer={currentOffer} nearOffers={nearOffers} />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers && nearOffers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  place={PlaceOfferCard.NEAR}
                  offer={offer}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
