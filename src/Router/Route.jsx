import { createBrowserRouter } from "react-router-dom";
import MainLaoyout from "../Layout/MainLaoyout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";


const myCreatedRoute =  createBrowserRouter([
    {
        path:'/',
        element:<MainLaoyout></MainLaoyout>,
        children :[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/public/phones.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default myCreatedRoute;