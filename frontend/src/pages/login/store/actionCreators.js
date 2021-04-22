import * as constants from './constants';
import { auth } from "../../../firebase"
import 'firebase/firestore';

export const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const getData =(name) =>({
    type: constants.GETDATA,
    username: name,
})

export const changeLogout = () => ({
    type: constants.LOGOUT,
    value: false
})

export const logout = () => {
    return (dispatch) => {
        auth.signOut();
        dispatch(changeLogout);
    }
}

