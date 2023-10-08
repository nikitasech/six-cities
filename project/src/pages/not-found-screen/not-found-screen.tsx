import { Link } from 'react-router-dom';

export default function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h2>
        404.
        <br />
        <small>Page not found</small>
      </h2>
      <Link to="/">Go to main page</Link>
    </>
  );
}
