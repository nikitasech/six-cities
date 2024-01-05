import { Provider } from 'react-redux';
import Routing from '../pages';
import { store } from '../store/store';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}
