import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import films from './mocks/films';
import promo from './mocks/promo';
import film from './mocks/film';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promo={promo}
      films={films}
      film={film}
    />
  </React.StrictMode>,
);
