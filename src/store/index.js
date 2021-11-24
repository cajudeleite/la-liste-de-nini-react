import { createStore } from 'redux';
import reducer from 'src/reducers';

// la fonction me retourne mon objet store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

// que je peux exporter pour m'en servir ailleurs
export default store;
