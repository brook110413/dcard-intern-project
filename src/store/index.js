import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import scenicSpotReducer from '../reducers/scenicSpotReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(scenicSpotReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
