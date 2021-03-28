import{ combineReducers} from 'redux-immutable';
import{ reducer as signupReducer } from '../pages/signup/store';
import{ reducer as loginReducer } from '../pages/login/store';
import{ reducer as headerReducer } from '../common/header/store';
const reducer = combineReducers({
    header: headerReducer,
    signup: signupReducer,
    login: loginReducer
})

export default reducer;