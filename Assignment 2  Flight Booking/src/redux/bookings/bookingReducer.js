import { ADDBOOKING, DELETEBOOKING } from "./actionTypes";

const initialState = [];
 const bookingReducer = (state = initialState, action) => {
    switch(action.type){
        case ADDBOOKING:
            return (
                [
                    ...state, 
                    action.playload
                ]
            )
        case DELETEBOOKING:
            console.log(action.playload.id)
            console.log(state)
            return state.filter((item) => item.id !== action.playload.id)
        default:
            return state;
    }
 }

export default bookingReducer;