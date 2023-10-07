import * as actionTypes from './actionTypes';
/**
 * The above code defines three action creators for submitting a form, including a request action, a
 * success action, and a failure action.
 */

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

/**
 * The handleSubmit function is used to submit a form with a username, email, and password to an API
 * endpoint and dispatch actions based on the response.
 * @param username - The username parameter is the username entered by the user during the form
 * submission.
 * @param email - The `email` parameter is the email address entered by the user during the form
 * submission.
 * @param password - The `password` parameter is the password entered by the user during the form
 * submission.
 * @returns The handleSubmit function returns a function that takes a dispatch parameter.
 */
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