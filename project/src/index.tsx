import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { city } from './mocks/city';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App city={city} />
    </Provider>
  </React.StrictMode>,
);
