import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Homepagecards } from './homepagecards';
import { Homepagecarousel } from './homepagecarousel';
import { Learningpage } from './learningpage';
import { Onlinepage } from './onlinepage';
import { Virtualpage } from './virtualpage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            homepagecards: Homepagecards,
            homepagecarousel : Homepagecarousel,
            learningpage: Learningpage,
            onlinepage: Onlinepage,
            virtualpage: Virtualpage
        }), applyMiddleware(thunk,logger)
    );

    return store;
}