import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import logo from '../../../assets/logo.png'

const Navbar = () => {


    const link = <>
        <li className="nav-item">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "fs-5 fw-bold link-underline link-underline-opacity-0 nav-active" : "fs-5 fw-bold link-underline link-underline-opacity-0 nav"
                }
            >
                Home
            </NavLink>
        </li>
        <li className="nav-item mt-1">
            <NavLink
                to="/bookingList"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "fs-5 fw-bold link-underline link-underline-opacity-0 nav-active" : "fs-5 fw-bold link-underline link-underline-opacity-0 nav"
                }
            >
                Booking List
            </NavLink>
        </li>
    </>

    return (
            <nav className="navbar navbar-light bg-light fixed-top nav-content">
                <div className="container-fluid">
                    <Link to='/'>
                    <img src={logo} alt="" className="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-Light" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title fs-2 fw-bolder canvas-title" id="offcanvasNavbarLabel">Moviesy</h5>
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {link}
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn text-white fs-6 fw-semibold search" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;