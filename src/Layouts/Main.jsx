import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className="main-layout">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;