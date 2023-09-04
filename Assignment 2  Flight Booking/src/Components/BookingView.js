import React from 'react'
import BookingForm from './BookingForm';
import BookingListRow from './BookingListRow';
import { useDispatch, useSelector } from "react-redux";
import { addBooking, deleteBooking } from '../redux/bookings/actions';

function BookingView() {
    const bookingList = useSelector((state) => state);
    const dispatch = useDispatch();

    const addBookingHandler = (inputValue) => {
        if(bookingList.length > 2){
            alert("You have already booked three flights!")
        }
        else{
            dispatch(addBooking(inputValue))
        }
    }
    const bookingDeleteHandler = (id) => {
            dispatch(deleteBooking(id))
    }
    return (
        <>
            <BookingForm addBookingHandler={addBookingHandler} />
            <div className="table-container">
                <table className="booking-table">
                    <thead className="bg-gray-100/50">
                        <tr className="text-black text-left">
                            <th>Destination From</th>
                            <th>Destination To</th>
                            <th className="text-center">Journey Date</th>
                            <th className="text-center">Guests</th>
                            <th className="text-center">Class</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                        {bookingList ? bookingList.map((booking, kye) => <BookingListRow key={kye} booking={booking} bookingDeleteHandler={bookingDeleteHandler} /> ) : ''}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BookingView