import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);const persister = 'Free';

export { store, persister };
