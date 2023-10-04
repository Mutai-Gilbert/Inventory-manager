import * as actionTypes from '../components/ActionsTypes/actionTypes'

const initialState = {
    loading: false,
    data: null,
    error: null,
};

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