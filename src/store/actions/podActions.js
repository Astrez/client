import axios from 'axios';
import { FETCH_ERROR, FETCH_PODS } from 'store/constant';
const BASE_API_URL = 'http://127.0.0.1:5000';
//Load Deployments
export const loadPods = () => async (dispatch) => {
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'GET',
        url: `${BASE_API_URL}/api/deployment/pod/get`
    };
    console.log('sending request');
    try {
        const res = await axios(config);
        const data = res.data;
        dispatch({ type: FETCH_PODS, payload: data.result });
    } catch (error) {
        if (error.response || error.message) {
            let message = error.message;
            dispatch({ type: FETCH_ERROR, payload: { message } });
            throw error;
        }
        dispatch({ type: FETCH_ERROR, payload: { message: 'Something went wrong' } });
    }
};
