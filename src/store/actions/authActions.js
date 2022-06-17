import axios from 'axios';
import {
	USER_LOADED,
	LOGOUT_SUCCESS,
} from '../constant';

export const loadUser = () => (dispatch, getState) => {
	//Headers
	const config = {
		headers: {
			'Content-type': 'application/json',
		},
	};
	//If token is present in local storage
	const token = getState().auth.token;
	if (token) {
		config.headers['Authorization'] = token;
	} else {
		return;
	}
	//User Loading
  dispatch({
				type: USER_LOADED,
			});

};

//Register a User
// export const register = ({ username, password }) => (dispatch) => {
// 	//Headers
// 	const config = {
// 		headers: {
// 			'Content-type': 'application/json',
// 		},
// 	};
// 	const body = JSON.stringify({ username, password });
// 	axios
// 		.post(`${process.env.REACT_APP_AUTH_API}/admin/register`, body, config)
// 		.then((res) =>
// 			dispatch({
// 				type: REGISTER_SUCCESS,
// 				payload: res.data,
// 			})
// 		)
// 		.catch((err) => {
// 			console.log(err.response);
// 			dispatch({
// 				type: REGISTER_FAIL,
// 			});
// 			dispatch(
// 				returnErrors(err.response.data, err.response.status, 'Register Fail')
// 			);
// 		});
// };

//Login a User
export const login = ({ username, password }) => (dispatch) => {
	//Headers
	// dispatch({ type: AUTH_LOADING });
	dispatch({
		type: USER_LOADED,
	});
};

//Log User Out
export const logOut = () => (dispatch) => {
	dispatch({
		type: LOGOUT_SUCCESS,
	});
};