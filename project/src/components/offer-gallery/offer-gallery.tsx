const MAX_SOURCES = 6;

type OfferImageProps = {
  sources: string[];
}

export default function OfferGallery({ sources }: OfferImageProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {sources.slice(0, MAX_SOURCES).map((source) => (
          <div key={source} className="property__image-wrapper">
            <img className="property__image" src={source} alt='Place' />
          </div>
        ))}
      </div>
    </div>
  );
}
