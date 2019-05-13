import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import rootReducer from "../reducers/index";
import createSagaMiddleware from 'redux-saga'
import watchAll from '../sagas/index'
 const logger = createLogger()
 const saga = createSagaMiddleware();
const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(saga,logger)
);
saga.run(watchAll)
export default store;
