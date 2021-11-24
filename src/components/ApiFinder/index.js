// on importe axios, une bibliothèque qui permet
// d'effectuer des requêtes AJAX
import axios from 'axios';

import { Route, Switch } from 'react-router-dom';

import { Segment } from 'semantic-ui-react';

import { useState } from 'react';

import { useSelector } from 'react-redux';

// == Import
import NavBar from '../NavBar';
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';
import RepoDetail from '../RepoDetail';
import MaListe from '../MaListe';
import LoadMore from '../LoadMore';

import { simplifyRepos } from '../../utils/repos';

import './styles.scss';

// == Composant
const ApiFinder = () => {
  // Pour gérer la pagination :
  // - connaitre la manière de contacter l'api pour avoir une page particulière de résultats
  // https://api.github.com/search/repositories?q=REPOACHERCHER&sort=stars&order=desc&page=1&per_page=9
  // - savoir combien il y a de résultat au total pour ma recherche
  // - savoir quelle est la dernière page que j'ai récupérée
  // - savoir quelle est la recherche courante

  // Mise en place du champ controllé pour le champ de recherche :
  // Les étapes :
  // x créer une variable d'état pour stocker l'information
  // x forcer la value de l'input avec cette info
  // - réagir aux modification du champ (onChange) pour enregistrer
  // les changement dans la variable d'état.

  const [searchValue, setSearchValue] = useState('');

  // le message à aficher et son état
  const [message, setMessage] = useState('Cherche ici les films que tu veux ajouter dans ta liste mon amour');
  const [myMessage, setMyMessage] = useState('Cherche ici les films de ta liste');
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [isMyErrorMessage, setMyIsErrorMessage] = useState(false);

  // est-on en train de charger ?
  const [isLoading, setIsLoading] = useState(false);
  const [isMyLoading, setIsMyLoading] = useState(false);

  // quelle est la dernière page demandée
  const [page, setPage] = useState(null);
  const [myPage, setMyPage] = useState(null);
  // combien de résultats en tout
  const [nbResults, setNbResults] = useState(0);
  const [myNbResults, setMyNbResults] = useState(0);

  const displayMessage = (messageText, isError = false) => {
    setMessage(messageText);
    setIsErrorMessage(isError);
  };

  const myDisplayMessage = (myMessageText, isMyError = false) => {
    setMyMessage(myMessageText);
    setIsMyErrorMessage(isMyError);
  };

  const [repos, setRepos] = useState([]);
  const [myRepos, setMyRepos] = useState([]);

  const filmId = useSelector((state) => state.id);
  const filmTitle = useSelector((state) => state.title);
  const filmOverview = useSelector((state) => state.overview);
  const filmPoster_path = useSelector((state) => state.poster_path);
  const films = useSelector((state) => state.films);

  const search = () => {
    console.log('je vais EFFECTIVEMENT lancer la recherche');

    setIsLoading(true);

    // on se rappelle de la recherche à lancer

    // on se rappelle de la dernière page demandée
    setPage(1);

    // on réinitialise le nombre de résultats total
    setNbResults(0);

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a5b6184c80781706fbb134c3a33bf034&language=fr-FR&query=${searchValue}&page=${page}&include_adult=true`).then( // avec the, on définit le traiement à réaliser si la promesse est tenue
      (response) => {
        console.log(response);
        // on récupère le tableau de repos dans la réponse
        const reposFromApi = response.data.results;
        // et le nombre de résultats
        const nbResultsFromApi = response.data.total_results;

        // on mémomorise le nombre de résultat dans la variable d'état
        setNbResults(nbResultsFromApi);

        // on formatte notre tableauy de repo
        const formatedReposFromApi = simplifyRepos(reposFromApi);
        // on les range dans la variable d'état "repos"
        setRepos(formatedReposFromApi);
        // on vide le champ de recherche (vive les champs controllés)
        setSearchValue('');
        // je vais indiquer à l'utilisateur le nombre de repos retournés grâce à un message
        displayMessage(`La recherche a retourné ${nbResultsFromApi} résultats`);

        setIsLoading(false);
      },
    ).catch( // on définit le traitement à réaliser quand la promesse n'est pas tenue
      () => {
        displayMessage('Une erreur est survenue...', true);

        setRepos([]);
        setPage(null);
        setNbResults(0);

        setIsLoading(false);
      },
    );
  };

  const searchMore = () => {
    setIsLoading(true);

    const newPage = page + 1;

    setPage(newPage);

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a5b6184c80781706fbb134c3a33bf034&language=fr-FR&query=${searchValue}&page=${page = newPage}&include_adult=true`).then(
      (response) => {
        const reposFromApi = response.data.results;

        const formatedReposFromApi = simplifyRepos(reposFromApi);

        // on prépare notre tableau de repo avec les tableau déjà présent
        // + les tableau fraichement récupérés.
        const newRepos = [...repos, ...formatedReposFromApi];

        // ma liste de repo est maitenant cette nouvelle liste
        setRepos(newRepos);

        setIsLoading(false);
      },
    ).catch( // on définit le traitement à réaliser quand la promesse n'est pas tenue
      () => {
        displayMessage('Une erreur est survenue...', true);

        setRepos([]);
        setPage(null);
        setNbResults(0);

        setIsLoading(false);
      },
    );
  };

  const mySearch = () => {
    console.log('je vais EFFECTIVEMENT lancer la recherche dans ma liste');

    setIsMyLoading(true);

    // on se rappelle de la recherche à lancer

    // on se rappelle de la dernière page demandée
    setMyPage(1);

    // on réinitialise le nombre de résultats total
    setMyNbResults(0);

     // avec the, on définit le traiement à réaliser si la promesse est tenue
      const searchlist = (response) => {
        console.log(response);
        // on récupère le tableau de repos dans la réponse
        const myReposFromApi = response.data;
        // et le nombre de résultats
        const myNbResultsFromApi = reposFromApi.length;

        // on mémomorise le nombre de résultat dans la variable d'état
        setMyNbResults(myNbResultsFromApi);

        // on formatte notre tableauy de repo
        const myFormatedReposFromApi = simplifyRepos(myReposFromApi);
        // on les range dans la variable d'état "repos"
        setMyRepos(myFormatedReposFromApi);
        // on vide le champ de recherche (vive les champs controllés)
        setSearchValue('');
        // je vais indiquer à l'utilisateur le nombre de repos retournés grâce à un message
        displayMyMessage(`La recherche a retourné ${myNbResultsFromApi} résultats`);

        setIsMyLoading(false);
      };

      searchlist(films);
  };

  const mySearchMore = () => {
    setIsMyLoading(true);

    const newPage = myPage + 1;

    setMyPage(newPage);

    const moresearchlist = (response) => {
        const myReposFromApi = response.data;

        const myFormatedReposFromApi = simplifyRepos(reposFromApi);

        // on prépare notre tableau de repo avec les tableau déjà présent
        // + les tableau fraichement récupérés.
        const myNewRepos = [...myRepos, ...myFormatedReposFromApi];

        // ma liste de repo est maitenant cette nouvelle liste
        setMyRepos(myNewRepos);

        setIsMyLoading(false);
      };

      moresearchlist(films);
  };

  return (
    <div className="api-finder">
      <NavBar />

      <Switch>
        <Route path="/maliste" exact>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            search={mySearch}
            isMyLoading={isMyLoading}
          />
          <Message message={myMessage} isErrorMessage={isMyErrorMessage} />
          <MaListe repos={myRepos} />
          {
            !isMyLoading && myRepos.length > 0 && myRepos.length < myNbResults
            && <LoadMore searchMore={mySearchMore} />
          }
        </Route>

        <Route path="/" exact>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            search={search}
            isLoading={isLoading}
          />
          <Message message={message} isErrorMessage={isErrorMessage} />
          <ReposResults repos={repos} />
          {
            !isLoading && repos.length > 0 && repos.length < nbResults
            && <LoadMore searchMore={searchMore} />
          }
        </Route>

        <Route path="/film" exact>
          <RepoDetail
            key= {filmId}
            id={filmId}
            title= {filmTitle}
            overview= {filmOverview}
            poster_path= {filmPoster_path}
              />
        </Route>

        <Route>
          <Segment>
            <p>Page not Found</p>
          </Segment>
        </Route>
      </Switch>
    </div>
  );
};

// == Export
export default ApiFinder;
