import { CREATE_PRODUCT, INCREMENT_PRODUCT_QUANTITY, DECREMENT_PRODUCT_QUANTITY } from './actionType';
import initialState from './initialState';


const productId = (state) =>{
    const maxId = state.reduce((maxId, product) => Math.max(maxId, product.id), -1);
    return maxId + 1;
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_PRODUCT:
            return [
                ...state,
                {
                    id: productId(state),
                    name: action.payload.name,
                    category: action.payload.category,
                    imageUrl: action.payload.imageUrl,
                    price: action.payload.price,
                    quantity: action.payload.quantity,
                }
            ];
        case INCREMENT_PRODUCT_QUANTITY:
            return state.map((item) => {
                if(item.id === action.payload.prodId){
                    return {
                        ...item,
                        quantity: item.quantity + action.payload.productQuantity,
                    };
                }
                else{
                    return item;
                }
            });
        case DECREMENT_PRODUCT_QUANTITY:
            return state.map((item) => {
                if(item.id === action.payload){
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
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