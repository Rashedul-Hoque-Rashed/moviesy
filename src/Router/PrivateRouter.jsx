import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';
import './PrivateRouter.css'

const PrivateRouter = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="loading">
                <span className="placeholder col-6"></span>
                <span className="placeholder w-75"></span>
                <span className="placeholder" style={{width: '25%'}}></span>
            </div>
        )
    }
    if (user) {
        return children;
    }
    else {
        return (
            <Navigate state={location.pathname} to="/login"></Navigate>
        )
    }
};

PrivateRouter.propTypes = {
    children: PropTypes.node,
}

export default PrivateRouter;