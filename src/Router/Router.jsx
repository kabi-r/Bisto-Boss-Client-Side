import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Authectication/Login.jsx/Login";
import Register from "../Pages/Authectication/Register.jsx/Register";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/UserDashbord/UserHome/UserHome";
import MyCart from "../Pages/UserDashbord/MyCart/MyCart";
import Reservation from "../Pages/UserDashbord/Reservation/Reservation";
import PaymentHistory from "../Pages/UserDashbord/PaymentHistory/PaymentHistory";
import AddReview from "../Pages/UserDashbord/AddReview/AddReview";
import PrivateRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
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
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path:'userhome',
                element:<UserHome></UserHome>
            },
            {
                path:'reservation',
                element:<Reservation></Reservation>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },
            {
                path:'mycart',
                element:<MyCart></MyCart>
            },
            {
                path:'addReview',
                element:<AddReview></AddReview>
            }
        ]
    }
  ])