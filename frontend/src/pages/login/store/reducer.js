import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login: false,
    data: {},
});

const reducerFunc = ( state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.LOGOUT:
            return state.set('login', action.value);
        case constants.SETDATA:
            return state.set('data', action.value);
        default:
            return state;
    }
};

export default reducerFunc;