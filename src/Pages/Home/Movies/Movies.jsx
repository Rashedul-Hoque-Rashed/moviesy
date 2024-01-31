import { useEffect, useState } from 'react';
import './Movies.css';
import { Link } from 'react-router-dom';

const Movies = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => {

                const filteredData = data.filter(movie => movie.show?.image !== null)

                setData(filteredData)
            })
    }, [])

    data.map(movie => {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = movie?.show?.summary;
        const textContent = tempElement.textContent || tempElement.innerText;

        movie.show.summary = textContent;
    })


    return (
        <div className='movies'>
            <h2 className="text-center fs-2 fw-bolder title pt-5 pb-3">New Movies</h2>
            <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1'>
                {
                    data.map(movie => <div key={movie.show?.id} className='col mb-3'>
                        <div className="card">
                            <img src={movie?.show?.image?.medium} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title text-black fs-4 fw-bold">{movie.show?.name}</h5>
                                <p className="card-text">{movie.show?.summary.length > 80 ? movie.show?.summary.slice(0, 80) + '.....' : movie.show?.summary}</p>
                                <Link to={`/details/${movie.show?.id}`}>
                                <button className="btn text-white fs-6 fw-semibold see-more">See More</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Movies;