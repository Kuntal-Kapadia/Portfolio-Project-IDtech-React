import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//HOMEPAGECARDS
export const fetchHomepagecards = () => dispatch => {
    dispatch(homepagecardsLoading());

    return fetch(baseUrl + 'homepagecards')
    .then(response => response.json())
    .then(homepagecards => dispatch(addHomepagecards(homepagecards)));
};

export const homepagecardsLoading = () => ({
    type: ActionTypes.HOMEPAGECARDS_LOADING
});

export const homepagecardsFailed = errMess => ({
    type: ActionTypes.HOMEPAGECARDS_FAILED,
    payload: errMess
});

export const addHomepagecards = homepagecards => ({
    type: ActionTypes.ADD_HOMEPAGECARDS,
    payload: homepagecards
});

//HOMEPAGECAROUSEL
export const fetchHomepagecarousel = () => dispatch => {
    dispatch(homepagecarouselLoading());

    return fetch(baseUrl + 'homepagecarousel')
    .then(response => response.json())
    .then(homepagecarousel => dispatch(addHomepagecarousel(homepagecarousel)));
};

export const homepagecarouselLoading = () => ({
    type: ActionTypes.HOMEPAGECAROUSEL_LOADING
});

export const homepagecarouselFailed = errMess => ({
    type: ActionTypes.HOMEPAGECAROUSEL_FAILED,
    payload: errMess
});

export const addHomepagecarousel = homepagecarousel => ({
    type: ActionTypes.ADD_HOMEPAGECAROUSELPAGE,
    payload: homepagecarousel
});

//LEARNING PAGE
export const fetchLearningpage = () => dispatch => {
    dispatch(learningpageLoading());

    return fetch(baseUrl + 'learningpage')
    .then(response => response.json())
    .then(learningpage => dispatch(addLearningpage(learningpage)));
};

export const learningpageLoading = () => ({
    type: ActionTypes.LEARNINGPAGE_LOADING
});

export const learningpageFailed = errMess => ({
    type: ActionTypes.LEARNINGPAGE_FAILED,
    payload: errMess
});

export const addLearningpage = learningpage => ({
    type: ActionTypes.ADD_LEARNINGPAGE,
    payload: learningpage
});

//ONLINE PAGE
export const fetchOnlinepage = () => dispatch => {
    dispatch(onlinepageLoading());

    return fetch(baseUrl + 'onlinepage')
    .then(response => response.json())
    .then(onlinepage => dispatch(addOnlinepage(onlinepage)));
};

export const onlinepageLoading = () => ({
    type: ActionTypes.ONLINEPAGE_LOADING
});

export const onlinepageFailed = errMess => ({
    type: ActionTypes.ONLINEPAGE_FAILED,
    payload: errMess
});

export const addOnlinepage = onlinepage => ({
    type: ActionTypes.ADD_ONLINEPAGE,
    payload: onlinepage
});

//VIRTUALPAGE
export const fetchVirtualpage = () => dispatch => {
    dispatch(virtualpageLoading());

    return fetch(baseUrl + 'virtualpage')
    .then(response => response.json())
    .then(virtualpage => dispatch(addVirtualpage(virtualpage)));
};

export const virtualpageLoading = () => ({
    type: ActionTypes.VIRTUALPAGE_LOADING
});

export const virtualpageFailed = errMess => ({
    type: ActionTypes.VIRTUALPAGE_FAILED,
    payload: errMess
});

export const addVirtualpage = virtualpage => ({
    type: ActionTypes.ADD_VIRTUALPAGE,
    payload: virtualpage
});