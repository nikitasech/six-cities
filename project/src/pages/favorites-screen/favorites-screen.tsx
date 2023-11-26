import { cities } from '../../const';
import FavoriteLocation from '../../components/favorite-location/favorite-location';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';


export default function FavoritesScreen(): JSX.Element {
  const isRenderNav = true;

  return (
    <div className="page">
      <Header isRenderNav={isRenderNav} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoriteLocation cityName={cities[3]} />
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
