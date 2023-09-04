import { ADDBOOKING, DELETEBOOKING } from "./actionTypes";


export const addBooking = (value) => {
    return {
        type: ADDBOOKING,
        playload: {
            id: value.id,
            destinationFrom: value.destinationFrom, 
            destinationTo: value.destinationTo, 
            journeyDate : value.journeyDate, 
            guests : value.guests, 
            class : value.class, 
        }

    };
};

export const deleteBooking = (value) => {
    return {
        type: DELETEBOOKING,
        playload: {
            id: value,
        }

    };
};