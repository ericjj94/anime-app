import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'; 

const init = function initialize(state) {
  return createStore(rootReducer, state,applyMiddleware(thunk));
};
module.exports = init;
