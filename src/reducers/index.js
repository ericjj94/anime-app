import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import animeReducer from './animeReducer';

const rootReducer = combineReducers({
    searchReducer,
    animeReducer
});
export default rootReducer;
