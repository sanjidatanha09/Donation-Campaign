import { createBrowserRouter } from "react-router-dom";
import MainLaoyout from "../Layout/MainLaoyout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CardDonate2 from "../Pages/CardDonate2/CardDonate2";


const myCreatedRoute =  createBrowserRouter([
    {
        path:'/',
        element:<MainLaoyout></MainLaoyout>,
        errorElement:<ErrorPage></ErrorPage>,
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
            },
            {
                path: "/phones/:id",
                element:<CardDonate2></CardDonate2>,
                loader:()=>fetch('/public/phones.json')
            }
        ]
    }
])

export default myCreatedRoute;