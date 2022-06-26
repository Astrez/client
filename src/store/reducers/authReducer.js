import {
	AUTH_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	TOKEN_FETCH,
} from '../constant';

const INITIAL_STATE = {
	token: localStorage.getItem('token'),
	isLoggedIn: localStorage.getItem('token'),
	isLoading: false,
	user: null,
};
// eslint-disable-next-line import/no-anonymous-default-export
const authReducer =  (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTH_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case TOKEN_FETCH:
			return {
				...state,
				token: action.payload.result,
				isLoggedIn: true,
			};
		case USER_LOADED:
		localStorage.setItem('token', true);
			return {
				...state,
				user: action.payload,
				isLoading: false,
        isLoggedIn:true
			};
		case REGISTER_SUCCESS:
			console.log(`Setting User Token`);
			localStorage.setItem('token', action.payload.result);
			return {
				...state,
				token: action.payload.result,
				isLoading: false,
				isLoggedIn: true,
			};
		case AUTH_ERROR:
		case LOGOUT_SUCCESS:
		case REGISTER_FAIL:
			console.log(`Removing User Token`);
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isLoggedIn: false,
				isLoading: false,
				user: null,
			};
		default:
			return state;
	}
};

export default authReducer;
