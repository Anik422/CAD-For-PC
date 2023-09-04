import { ADDBOOKING, DELETEBOOKING } from "./actionTypes";

const initialState = {
    counter: 0,
    bookingList: [],
};
 const bookingReducer = (state = initialState, action) => {
    switch(action.type){
        case ADDBOOKING:
            return (
                {
                    ...state, 
                    counter: state.counter + 1,
                    bookingList : [
                        ...state.bookingList,
                        action.playload
                    ]
                }
            )
        case DELETEBOOKING:
            return {
                ...state,
                bookingList: state.bookingList.filter((item) => item.id !== action.playload.id)
            };
        default:
            return state;
    }
 }

export default bookingReducer;