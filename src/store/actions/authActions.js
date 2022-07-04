import axios from 'axios';
import { USER_LOADED, LOGOUT_SUCCESS, AUTH_LOADING, REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR, TOKEN_FETCH } from '../constant';
const BASE_URL = 'http://localhost:8000';
export const loadUser = () => async (dispatch, getState) => {
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'GET',
        url: BASE_URL
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
        dispatch({ type: USER_LOADED, payload: data.result });
    } catch (error) {
        if (error.response) {
            let error = new Error('Cannot get user details. Please try again!');
            throw error;
        }
    }
};

//Register a User
export const register =
    ({ username, password, role = 'U', name }) =>
    async (dispatch, getState) => {
        //Headers
        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            url: `${BASE_URL}/signup`,
            data: { username, password, role, name }
        };
        const token = getState().auth.token;

        if (token) {
            config.headers['Authorization'] = token;
        } else {
            return;
        }
        try {
            const res = await axios(config);
            const data = res.data;
            dispatch({ type: REGISTER_SUCCESS, payload: data });
        } catch (error) {
            if (error.response || error.message) {
                let errorMessage = error.message;
                dispatch({ type: REGISTER_FAIL, payload: { error: errorMessage } });
                throw error;
            }
            dispatch({ type: REGISTER_FAIL, payload: { error: 'Maybe the server is offline' } });
        }
    };

//Login a User
export const login =
    ({ username, password }) =>
    async (dispatch) => {
        //Headers
        const config = {
            method: 'POST',
            url: `${BASE_URL}/signin`,
            data: { username, password }
        };
        dispatch({ type: AUTH_LOADING });
        try {
            const res = await axios(config);
            const data = res.data;
            dispatch({ type: TOKEN_FETCH, payload: data });
            dispatch(loadUser());
        } catch (error) {
            if (error.response || error.message) {
                let errorMessage = error.message;
                dispatch({ type: AUTH_ERROR, payload: { error: errorMessage } });
                throw error;
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
