import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Homepagecards } from './homepagecards';
import { Homepagecarousel } from './homepagecarousel';
import { Learningpage } from './learningpage';
import { Onlinepage } from './onlinepage';
import { Virtualpage } from './virtualpage';
import { Whyidpage } from './whyidpage';
import { Registerpage } from './registerpage';
import { InitialFeedback } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            homepagecards: Homepagecards,
            homepagecarousel : Homepagecarousel,
            learningpage: Learningpage,
            onlinepage: Onlinepage,
            virtualpage: Virtualpage,
            whyidpage: Whyidpage,
            registerpage:Registerpage, 
            ...createForms({
                feedbackForm: InitialFeedback
            })
        }), applyMiddleware(thunk,logger)
    );

    return store;
}