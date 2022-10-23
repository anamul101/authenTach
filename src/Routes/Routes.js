import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../components/Home';
import ErrorPage from "../components/ErrorPage";
import Profile from "../components/Profile";
import Wallet from "../components/Wallet";
import Login from '../components/Login';
import Register from '../components/Register'
import PrivetRouters from "../PrivetRoutes/PrivetRouters";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/profile',
                element:<PrivetRouters><Profile></Profile></PrivetRouters>
            },
            {
                path:'/wallet',
                element:<PrivetRouters><Wallet></Wallet></PrivetRouters>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    }
])