import { combineReducers } from 'redux';
import authReducer from './authReducer';
import customizationReducer from './customizationReducer';
import deploymentReducer from './deploymentReducer';

const reducer = combineReducers({
    auth: authReducer,
    customization: customizationReducer,
    deployment: deploymentReducer
});
export default reducer;
