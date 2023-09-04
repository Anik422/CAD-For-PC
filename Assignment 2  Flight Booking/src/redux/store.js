import {createStore } from "redux";
import bookingReducer from "./bookings/bookingReducer";




const store = createStore(bookingReducer);
export default store;