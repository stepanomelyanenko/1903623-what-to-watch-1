import Film from '../types/film';

export const filterSimilar = (films: Film[], currentId: number | undefined) => {
  const result = films.filter((film) => (
    film.id !== currentId
  ));

  if (result.length > 4) {
    return result.slice(0, 4);
  }

  return result;
};
