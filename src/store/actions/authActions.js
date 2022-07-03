import axios from 'axios';
import { USER_LOADED, LOGOUT_SUCCESS, AUTH_LOADING, AUTH_ERROR, TOKEN_FETCH } from '../constant';

export const loadUser = () => async (dispatch, getState) => {
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'GET',
        url: 'https://0708-202-131-143-233.in.ngrok.io/'
    };
    //If token is present in local storage
    const token = getState().auth.token;
    if (token) {
        config.headers['Authorization'] = token;
    } else {
        return;
    }
    try {
        const res = await axios(config);
        const data = res.data;
        dispatch({ type: USER_LOADED, payload: data });
    } catch (error) {
        if (error.response) {
            let error = new Error('Cannot get user details. Please try again!');
            throw error;
        }
    }
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
export const login =
    ({ username, password }) =>
    async (dispatch) => {
        //Headers
        const config = {
            method: 'POST',
            url: 'https://0708-202-131-143-233.in.ngrok.io/signin',
            data: { username, password }
        };
        dispatch({ type: AUTH_LOADING });
        try {
            const res = await axios(config);
            const data = res.data;
            dispatch({ type: TOKEN_FETCH, payload: data });
            dispatch(loadUser());
        } catch (error) {
            if (error.response) {
                dispatch({ type: AUTH_ERROR, payload: { error: error.response.data } });
                return;
            }
            dispatch({ type: AUTH_ERROR, payload: { error: 'Check your credentials or maybe the server is offline' } });
        }
    };

//Log User Out
export const logOut = () => (dispatch) => {
    dispatch({
        type: LOGOUT_SUCCESS
    });
};
