import { CREATE_PRODUCT, INCREMENT_PRODUCT_QUANTITY, DECREMENT_PRODUCT_QUANTITY } from "./actionType";

export const createProduct = (name, category, imageUrl, price, quantity) => {
    return {
        type: CREATE_PRODUCT,
        payload: {
            name,
            category,
            imageUrl,
            price,
            quantity,
        }
    };
};


export const incrementProductQuantity = (prodId, productQuantity) => {
    return {
        type: INCREMENT_PRODUCT_QUANTITY,
        payload: {
            prodId, 
            productQuantity
        }
    };
};

export const decrementProductQuantity = (prodId) => {
    return {
        type: DECREMENT_PRODUCT_QUANTITY,
        payload: prodId
    };
};