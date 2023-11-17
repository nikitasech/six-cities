import cn from 'classnames';

export enum PlaceBookmark {
  CARD = 'place-card',
  OFFER = 'property'
}

type BookmarkProps = {
  place?: PlaceBookmark;
  isActive: boolean;
};

export default function Bookmark({
  place = PlaceBookmark.CARD,
  isActive
}: BookmarkProps): JSX.Element {
  const bookmarkClasses = cn(`${place}__bookmark-button`, 'button', {
    [`${place}__bookmark-button--active`]: isActive
  });

  const size = {
    width: place === PlaceBookmark.OFFER ? 31 : 18,
    height: place === PlaceBookmark.OFFER ? 33 : 19
  };

  return (
    <button className={bookmarkClasses} type="button">
      <svg className={`${place}__bookmark-icon`} width={size.width} height={size.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
