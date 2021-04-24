import{ combineReducers} from 'redux-immutable';
import{ reducer as signupReducer } from '../pages/signup/store';
import{ reducer as loginReducer } from '../pages/login/store';
const reducer = combineReducers({
    signup: signupReducer,
    login: loginReducer
})

export default reducer;