import { useEffect, useState } from "react";
import './BookingData.css'

const BookingData = () => {

    const [booking, setBooking] = useState([]);
    const [noData, setNoData] = useState("");

    useEffect(() => {
        const booked = JSON.parse(localStorage.getItem('booked'));
        if (booked) {
            setBooking(booked);
        }
        else {
            setNoData("You have not bookmarked any events!!!")
        }
    }, []);


    return (
            <div className="booking-data">
                {
                    noData ?
                        <p className="">
                            {noData}
                        </p>
                        : <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Movie Name</th>
                            <th scope="col">Date & Time</th>
                          </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map(book => <tr key={book.id}>
                                    <th scope="row">{book.id}</th>
                                    <td>{book.name}</td>
                                    <td>{book.email}</td>
                                    <td>{book.movieName}</td>
                                    <td>{book.time}</td>
                                  </tr>)
                            }
                        </tbody>
                      </table>
                }
            </div>
    );
};

export default BookingData;