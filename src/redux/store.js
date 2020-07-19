import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'
import rootReducer from './root-reducer';

const middlewares=[logger];

//const store=createStore(rootReducer,applyMiddleware(...middlewares))
export const store=createStore(rootReducer,applyMiddleware(...middlewares))
export const persistor = persistStore(store)

//normal store
//export default store

export default { store , persistor};