import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLaoyout = () => {
    return (
        <div className="max-w-[425px] md:max-w-[768px] lg:max-w-[1300px]   mx-auto">
           <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLaoyout;