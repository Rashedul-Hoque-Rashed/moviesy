import { useLoaderData } from "react-router-dom";
import './Booking.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Booking = () => {

    const movie = useLoaderData();
    const { user } = useContext(AuthContext)



    // const handleBooking = (e) => {
    //     e.preventDefault();
    //     const from = e.target;
    //     const name = from.name.value;
    //     const email = from.email.value;
    //     const movieName = from.movieName.value;
    //     const time = from.time.value;

    //     const data = { name, email, movieName, time }

    // }

    const handelBooking = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const movieName = from.movieName.value;
        const time = from.time.value;

        const data = { id: movie.id, name, email, movieName, time }
        const addBooked = [];
        const booking = JSON.parse(localStorage.getItem('booked'));
        if (!booking) {
            addBooked.push(data);
            localStorage.setItem('booked', JSON.stringify(addBooked));
            Swal.fire({
                icon: 'success',
                title: 'You have successfully booked this event',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            const exist = booking.find(booked => booked.id === movie.id);
            if (!exist) {
                addBooked.push(...booking, data);
                localStorage.setItem('booked', JSON.stringify(addBooked));
                Swal.fire({
                    icon: 'success',
                    title: 'You have successfully booked this event',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'You have already booked this event',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    }

    return (
        <div className="booking" style={{ backgroundColor: '#508bfc' }}>
            <section className="" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Booking the show</h3>

                                    <form onSubmit={handelBooking}>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="name">Name</label>
                                            <input type="text" id="name" name='name' defaultValue={user.displayName} readOnly className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="email">Email</label>
                                            <input type="email" id="email" name='email' defaultValue={user.email} readOnly className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="movieName">Movie Name</label>
                                            <input type="text" id="movieName" name='movieName' defaultValue={movie.name} readOnly className="form-control form-control-lg" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="time">Show Time</label>
                                            <input type="datetime-local" id="time" name='time' className="form-control form-control-lg" />
                                        </div>



                                        <button className="btn btn-primary btn-lg btn-block" type="submit">Booking</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;