import {DELETE_ITEM, PLACE_ORDER} from "../actions/actionTypes";

const initialState = {
    stateForChosenItems: [],
};

const orderPageReducer = (state = initialState, action) => {
    switch (action.type) {

        case PLACE_ORDER:
            console.log(state);

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
                    console.log(copy);
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
            console.log(action.itemName);
            const index = state.stateForChosenItems.findIndex(item => item.name === action.itemName);
            if (index !== -1) {
                console.log(state.stateForChosenItems, action.itemName);
                if (state.stateForChosenItems[index].quantity > 1) {
                    let copy = state.stateForChosenItems[index];
                    copy.quantity --;
                    return {
                        ...state,
                        copy
                    }
                } else {
                    state.stateForChosenItems.splice(index, 1);
                }
            }
            return state;

        default:
            return state;
    }
};

export default orderPageReducer;