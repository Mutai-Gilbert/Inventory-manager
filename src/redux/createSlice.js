import * as actionTypes from '../components/ActionsTypes/actionTypes'

const initialState = {
    loading: false,
    data: null,
    error: null,
};
/**
 * The formReducer function handles different actions related to submitting a form and updates the
 * state accordingly.
 * @param [state] - The `state` parameter represents the current state of the form in the Redux store.
 * It is an object that contains properties such as `loading`, `data`, and `error`.
 * @param action - The `action` parameter represents the action object that is dispatched to the
 * reducer. It contains information about the action type and any additional data that is needed to
 * update the state. In this case, the action object should have a `type` property that corresponds to
 * one of the `actionTypes` defined
 * @returns The formReducer function returns a new state object based on the action type. If the action
 * type is "submitFormRequest", it returns a new state object with the loading property set to true and
 * the data and error properties set to null. If the action type is "submitFormSuccess", it returns a
 * new state object with the loading property set to false, the data property set to the action payload
 */

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.submitFormRequest:
            return {
                ...state,
                loading: true,
                data: null,
                error: null,
            };
        case actionTypes.submitFormSucess:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        case actionTypes.submitFormFailure:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default formReducer;