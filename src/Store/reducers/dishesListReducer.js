import {GET_API_LIST} from "../actions/actionTypes";

const initialState = {
    apiResponse: null,
};

const dishesListReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_API_LIST:
            return {
                ...state,
                apiResponse: action.resp
            };

        default:
            return state;
    }
};

export default dishesListReducer;