import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import Booking from "../Pages/Booking/Booking";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import BookingData from "../Pages/BookingData/BookingData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/details/:id",
        element: <MovieDetails />,
        loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
      },
      {
        path: "/booking/:id",
        element: <PrivateRouter><Booking /></PrivateRouter>,
        loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/bookingList",
        element: <BookingData />
      },
    ]
  },
]);