import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import films from './mocks/films';
import promo from './mocks/promo';
import comments from './mocks/comments';
import similar from './mocks/similar';
import favorite from './mocks/favorite';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promo={promo}
      films={films}
      reviews={comments}
      similar={similar}
      favorite={favorite}
    />
  </React.StrictMode>,
);
