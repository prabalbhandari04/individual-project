import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import users from './usersReducer'
import docauth from './docauthReducer'
import doctoken from './doctokenReducer'
import doctors from './doctorsReducer'

export default combineReducers({
    docauth,
    auth,
    token,
    users,
    doctoken,
    doctors,
})