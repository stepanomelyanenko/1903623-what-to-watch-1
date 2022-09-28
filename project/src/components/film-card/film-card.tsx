import {MouseEvent} from 'react';

type FilmCardProps = {
  title: string,
  image: string,
  mouseOverHandler: (evt: MouseEvent<HTMLDivElement>) => void;
}


function FilmCard({title, image, mouseOverHandler}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={mouseOverHandler}>
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
