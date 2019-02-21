import {KEEP_NEW_TEXT} from "../actions/actionTypes";

const initialState = {
    name: '',
    url: '',
    price: '',
    id: '',
};

const addNewDishReducer = (state = initialState, action) => {
    switch (action.type) {

        case KEEP_NEW_TEXT:
            console.log('this keep new text');
            const {name, value} = action.target;
            return {
                ...state,
                [name]: value,
            };

        default:
            return state;
    }
};

export default addNewDishReducer;