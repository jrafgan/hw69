import {CLEAR_ORDER, DELETE_ITEM, PLACE_ORDER, SEND_ORDER} from "../actions/actionTypes";

const initialState = {
    stateForChosenItems: [],
    orderToSend: null,
};

const orderPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case PLACE_ORDER:
            const name = action.item.name;

            if (state.stateForChosenItems.length === 0) {

                let copy = state.stateForChosenItems;
                const item = {name: name, price: action.item.price, quantity: 1};
                copy.push(item);
                return {
                    ...state, stateForChosenItems: [item]
                };
            } else {
                const index = state.stateForChosenItems.findIndex(item => item.name === name);
                if (index !== -1) {
                    let copy = state.stateForChosenItems;
                    copy[index].quantity++;
                    return {
                        ...state, stateForChosenItems: copy
                    }
                } else {
                    let copy = state.stateForChosenItems;
                    const item = {name: name, price: action.item.price, quantity: 1};
                    copy.push(item);
                    return {
                        ...state, stateForChosenItems: copy
                    };
                }
            }

        case DELETE_ITEM:
            const index = state.stateForChosenItems.findIndex(item => item.name === action.itemName);
            if (index !== -1) {
                if (state.stateForChosenItems[index].quantity > 1) {
                    let copy = state.stateForChosenItems[index];
                    copy.quantity--;
                    return {
                        ...state,
                        copy
                    }
                } else {
                    state.stateForChosenItems.splice(index, 1);
                }
            }
            return state;

        case SEND_ORDER:
            return {
                ...state,
                orderToSend: action.info,
            };

        case CLEAR_ORDER:
            return {
                ...state,
                stateForChosenItems: []
            };

        default:
            return state;
    }
};

export default orderPageReducer;