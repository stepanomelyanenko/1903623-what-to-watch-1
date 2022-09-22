import MainScreen from '../../pages/main-screen/main-screen';

type headFilm = {
  title: string,
  genre: string,
  year: number
}

function App(HeadFilmProps: headFilm): JSX.Element {
  return (
    <MainScreen headFilm = {HeadFilmProps}/>
  );
}

export default App;
