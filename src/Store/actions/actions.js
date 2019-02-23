import {
    CLEAR_ORDER,
    DELETE_ITEM,
    FETCH_FINALLY,
    FETCH_START,
    GET_API_LIST,
    KEEP_NEW_TEXT,
    PLACE_ORDER,
    SEND_ORDER
} from "./actionTypes";
import axios from "../../axios_url";

export const keepNewText = (target) => {
    const {name, value} = target;
    console.log({name, value});
    return {type: KEEP_NEW_TEXT, target};
};

export const setDishesListState = resp => {
    return {type: GET_API_LIST, resp};
};

export const placeOrder = item => {
    return {type: PLACE_ORDER, item};
};

export const deleteItem = itemName => {
    return {type: DELETE_ITEM, itemName}
};

export const fetchStart = () => {
    return {type: FETCH_START}
};

export const fetchFinally = () => {
    return {type: FETCH_FINALLY}
};

export const clearOrder = () => {
    return {type: CLEAR_ORDER}
};

export const submitNewDish = (e) => {
    e.preventDefault();
    return (dispatch, getState) => {
        const state = getState();
        axios.post('dishes.json', state.addNewDishReducer).then(response => {
        })
    }
};

export const sendOrder = info => {
    return {type: SEND_ORDER, info}
};

export const getApiList = () => {
    return (dispatch) => {
        dispatch(fetchStart());
        return axios.get('dishes.json').then(response => {
            const apiResp = Object.keys(response.data).map(id => {
                return {...response.data[id]};
            });
            dispatch(setDishesListState(apiResp));
        })
    }
};

export const addToCart = (id) => {
    return (dispatch, getState) => {
        let state = getState();
        state = state.dishListReducer.apiResponse;
        const index = state.findIndex(item => item.id === id);
        state = state[index];
        dispatch(placeOrder(state));
    }
};

export const fetchPost = () => {
    return (dispatch, getState) => {
        const state = getState().orderPageReducer;
        dispatch(fetchStart());
        return axios.post('dishesOrder.json', state).finally(() => {
            dispatch(fetchFinally());
            dispatch(clearOrder());
        });
    }
};
