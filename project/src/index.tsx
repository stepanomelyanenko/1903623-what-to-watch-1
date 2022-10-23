import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';
import promo from './mocks/promo';
import FAVORITE from './mocks/favorite';
import ErrorMessage from './components/error-message/error-message';
import {checkAuthAction, fetchFilmsAction} from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        promo={promo}
        favorite={FAVORITE}
      />
    </Provider>
  </React.StrictMode>,
);
