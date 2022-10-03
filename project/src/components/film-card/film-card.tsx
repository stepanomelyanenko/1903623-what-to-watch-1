import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import PreviewPlayer from '../preview-player/preview-player';

type FilmCardProps = {
  id: number,
  title: string,
  image: string,
  previewVideo: string,
  isPointed: boolean,
  changePointedFilm: (id: number) => void
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const {id, title, image, previewVideo, isPointed, changePointedFilm} = props;

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => changePointedFilm(id)}
      onMouseLeave={() => changePointedFilm(NaN)}
    >
      <div className="small-film-card__image">
        {
          isPointed ? <PreviewPlayer image={image} previewVideo={previewVideo} />
            : <img src={image} alt={title} width="280" height="175"/>
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
