import { Link, useLoaderData } from "react-router-dom";
import './MovieDetails.css'
import { FaStar } from "react-icons/fa";


const MovieDetails = () => {

    const movie = useLoaderData();

    const tempElement = document.createElement("div");
    tempElement.innerHTML = movie?.summary;
    const textContent = tempElement.textContent || tempElement.innerText;

    return (
        <div className="movie-details px-4">
            <div className="d-flex flex-wrap justify-content-start align-items-center mb-5 gap-4">
                <div className="position-relative">
                    <img src={movie.image.medium} alt="" />
                    <button className="btn bg-black text-white position-absolute top-20 start-0">{movie.runtime} min</button>
                </div>
                <div>
                    <h1 className="card-title text-black fs-2 fw-bold">{movie.name}</h1>
                    <div className="d-flex justify-content-start align-items-center gap-2">
                        <p className="movie-type">{movie.type} || {movie.language} <br /> {movie.premiered} - {movie.ended === null ? 'Present' : movie.ended}</p>
                        <p className="d-flex flex-row justify-content-start align-items-center gap-2 movie-rating">Rating: <span className="d-flex flex-row justify-content-start align-items-center gap-2 rating"><FaStar /> {movie.rating.average}</span></p>
                    </div>
                    <Link to={`/booking/${movie.id}`}>
                    <button className="btn text-white fs-6 fw-semibold see-more">Booking</button>
                    </Link>
                </div>
            </div>
            <div>
                <p>
                    {textContent}
                </p>
            </div>
        </div>
    );
};

export default MovieDetails;