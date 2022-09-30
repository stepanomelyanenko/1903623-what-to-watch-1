import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import FILMS from './mocks/films';
import promo from './mocks/promo';
import COMMENTS from './mocks/comments';
import SIMILAR from './mocks/similar';
import FAVORITE from './mocks/favorite';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promo={promo}
      films={FILMS}
      reviews={COMMENTS}
      similar={SIMILAR}
      favorite={FAVORITE}
    />
  </React.StrictMode>,
);
