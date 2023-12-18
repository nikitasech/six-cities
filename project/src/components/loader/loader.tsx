import './loader.css';

export function Loader(): JSX.Element {
  return (
    <div className="loader">
      <span className="loader__spinner" aria-label='Loading...'></span>
    </div>
  );
}
