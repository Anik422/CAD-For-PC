import { ADD_TO_CART, REMOVE_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./actionType";
import initialState from "./initialState";

const cartId = (state) => {
    const maxId = state.reduce((maxId, card) => Math.max(maxId, card.id), -1);
    return maxId + 1;
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item =  state.filter(item => item.productId === action.payload.id);
            const all_item =  state.filter(item => item.productId !== action.payload.id);
            if(item.length === 1) {
                return [
                    ...all_item,
                    {
                        ...item[0],
                        quantity: item[0].quantity + 1,
                    }
                ];
            }
            else{
                return [
                    ...state,
                    {
                        id: cartId(state),
                        productId: action.payload.id,
                        name: action.payload.name,
                        imageUrl: action.payload.imageUrl,
                        category: action.payload.category,
                        price: action.payload.price,
                        quantity: 1,
                    }
                ];
            }
        case REMOVE_CART:
            return state.filter((item) => item.id !== action.payload);
        case INCREMENT_QUANTITY:
            return state.map((item) => {
                if (item.id === action.payload){
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                }
                else{
                    return item;
                }
            });

        case DECREMENT_QUANTITY:
            return state.map((item) => {
                if (item.id === action.payload){
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                }
                else{
                    return item;
                }
            });
            
        default:
            return state;


    };
};

export default reducer;