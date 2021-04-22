import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login: false,
    username:''
});

const func = ( state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.LOGOUT:
            return state.set('login',action.value);
        case constants.GETDATA:
            return state.set('username',action.username);
        default:
            return state;
    }
};

export default func;