import axios from 'axios';
import { DELETE_DEPLOYMENT, EDIT_IMAGE, FETCH_DEPLOYMENTS, FETCH_ERROR, REPLACE_REPLICAS } from 'store/constant';
const BASE_API_URL = 'http://127.0.0.1:5000';
//Load Deployments
export const loadDeployments = () => async (dispatch) => {
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'GET',
        url: `${BASE_API_URL}/api/deployment/get`
    };
    console.log('sending request');
    try {
        const res = await axios(config);
        const data = res.data;
        dispatch({ type: FETCH_DEPLOYMENTS, payload: data.result });
    } catch (error) {
        if (error.response || error.message) {
            let message = error.message;
            dispatch({ type: FETCH_ERROR, payload: { message } });
            throw error;
        }
        dispatch({ type: FETCH_ERROR, payload: { message: 'Something went wrong' } });
    }
};
// Delete Deployment using name and namespace
export const deleteDeployment =
    ({ name, namespace }) =>
    async (dispatch) => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            },
            data: { name, namespace },
            method: 'POST',
            url: `${BASE_API_URL}/api/deployment/delete`
        };
        try {
            await axios(config);
            dispatch({ type: DELETE_DEPLOYMENT });
            dispatch(loadDeployments());
        } catch (error) {
            if (error.response || error.message) {
                let message = error.message;
                dispatch({ type: FETCH_ERROR, payload: { message } });
                throw error;
            }
            dispatch({ type: FETCH_ERROR, payload: { message: 'Something went wrong' } });
        }
    };
// Edit Replicas using name and namespace
export const editReplicas =
    ({ name, namespace, replicas }) =>
    async (dispatch) => {
        const data = { name, namespace, replicas };
        const config = {
            headers: {
                'Content-type': 'application/json'
            },
            data,
            method: 'POST',
            url: `${BASE_API_URL}/api/deployment/update/replicas`
        };
        try {
            await axios(config);
            dispatch({ type: REPLACE_REPLICAS });
            dispatch(loadDeployments());
        } catch (error) {
            if (error.response || error.message) {
                let message = error.message;
                dispatch({ type: FETCH_ERROR, payload: { message } });
                throw error;
            }
            dispatch({ type: FETCH_ERROR, payload: { message: 'Something went wrong' } });
        }
    };
// Edit Image using name, namespace and containerName
export const editImage =
    ({ name, namespace, containerName, containerImage }) =>
    async (dispatch) => {
        const data = { name, namespace, containerImage, containerName };
        console.log(data);
        const config = {
            headers: {
                'Content-type': 'application/json'
            },
            data: data,
            method: 'POST',
            url: `${BASE_API_URL}/api/deployment/update/image`
        };
        try {
            await axios(config);
            dispatch({ type: EDIT_IMAGE });
            dispatch(loadDeployments());
        } catch (error) {
            if (error.response || error.message) {
                let message = error.message;
                dispatch({ type: FETCH_ERROR, payload: { message } });
                throw error;
            }
            dispatch({ type: FETCH_ERROR, payload: { message: 'Something went wrong' } });
        }
    };
