import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const HeadFilmInfo = {
  title: 'FILM TITLE',
  genre: 'Drama',
  year: 2023
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title={HeadFilmInfo.title}
      genre={HeadFilmInfo.genre}
      year={HeadFilmInfo.year}
    />
  </React.StrictMode>,
);
