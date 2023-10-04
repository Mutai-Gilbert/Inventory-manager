import * as actionTypes from '../ActionsTypes/actionTypes';

const submitFormRequest = () => ({
    type: actionTypes.submitFormRequest,
});
const submitFormSucess = (data) => ({
    type: actionTypes.submitFormSucess,
    payload: data,
});
const submitFormFailure = (error) => ({
    type: actionTypes.submitFormFailure,
    payload: error,
});
const API = "http://localhost:3000";

export const handleSubmit = (username, email, password) => {
    return (dispatch) => {
        dispatch(submitFormRequest());

        fetch(`${API}/api/v1/users`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    email,
                    password
                },
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch(submitFormSucess(data));
        })
        .catch((error) => {
            dispatch(submitFormFailure(error));
        });
    };
};