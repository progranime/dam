import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import fileReducer from './fileReducer'
import downloadReducer from './downloadReducer'
import favoriteReducer from './favoriteReducer'

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    file: fileReducer,
    download: downloadReducer,
    favorite: favoriteReducer
})
