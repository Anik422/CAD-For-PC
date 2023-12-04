import { ADD_TO_CART, REMOVE_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./actionType";


export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    };
};

export const removeCart = (cardId) => {
    return {
        type: REMOVE_CART,
        payload: cardId
    };
};

export const incrementQuantity = (cardId) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: cardId
    };
};

export const decrementQuantity = (cardId) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: cardId
    };
};