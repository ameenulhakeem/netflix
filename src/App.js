import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import request from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchurl={request.fetchNetflixOriginals} />
      <Row title="NetflixOriginal" fetchurl={request.fetchNetflixOriginals} />
      <Row title="TopRated" fetchurl={request.fetchTopRated} />
      <Row title="Trending" fetchurl={request.fetchTrending} />
      <Row title="Action" fetchurl={request.fetchActionMovies} />
      <Row title="Comedy" fetchurl={request.fetchComedyMovies} />
      <Row title="Horror" fetchurl={request.fetchHorrorMovies} />
      <Row title="Romance" fetchurl={request.fetchRomanceMovies} />
      <Row title="Documentary" fetchurl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
