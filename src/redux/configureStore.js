import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Homepagecards } from './homepagecards';
import { Homepagecarousel } from './homepagecarousel';
import { Learningpage } from './learningpage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            homepagecards: Homepagecards,
            homepagecarousel : Homepagecarousel,
            learningpage: Learningpage
        }), applyMiddleware(thunk,logger)
    );

    return store;
}