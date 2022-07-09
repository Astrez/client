import { combineReducers } from 'redux';
import authReducer from './authReducer';
import customizationReducer from './customizationReducer';
import deploymentReducer from './deploymentReducer';
import podReducer from './podReducer';

const reducer = combineReducers({
    auth: authReducer,
    customization: customizationReducer,
    deployment: deploymentReducer,
    pods: podReducer
});
export default reducer;
