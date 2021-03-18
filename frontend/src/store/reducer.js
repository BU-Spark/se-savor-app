import{ combineReducers} from 'redux-immutable';
import{ reducer as loginReducer } from '../pages/login/store';
import{ reducer as headerReducer } from '../common/header/store';
const reducer = combineReducers({
    header: headerReducer,
    login: loginReducer,
})

export default reducer;