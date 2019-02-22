import {GET_API_LIST, KEEP_NEW_TEXT, PLACE_ORDER} from "./actionTypes";
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

export const submitNewDish = (e) => {
    e.preventDefault();
    return (dispatch, getState) => {
        const state = getState();
        console.log(state.addNewDishReducer);
        axios.post('dishes.json', state.addNewDishReducer).then(response => {
            console.log(response.data);
        })
    }
};

export const getApiList = () => {
    return (dispatch) => {
        console.log('axios');
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
        const index = state.findIndex(item=>item.id===id);
        state = state[index];
        dispatch(placeOrder(state));
        console.log(state.name, state.price);
    }
};