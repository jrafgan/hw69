import {FETCH_FINALLY, FETCH_START, GET_API_LIST} from "../actions/actionTypes";

const initialState = {
    apiResponse: null,
    spinnerShow: false,
};

const dishesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                spinnerShow: true,
            };

        case GET_API_LIST:
            return {
                ...state,
                apiResponse: action.resp,
                spinnerShow: false,
            };

        case FETCH_FINALLY:
            return {
                ...state,
                spinnerShow: false,
            };

        default:
            return state;
    }
};

export default dishesListReducer;