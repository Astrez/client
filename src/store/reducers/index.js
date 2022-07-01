import { combineReducers } from 'redux';
import authReducer from './authReducer';
import customizationReducer from './customizationReducer';

const reducer = combineReducers({
    auth: authReducer,
    customization: customizationReducer
});
export default reducer;
