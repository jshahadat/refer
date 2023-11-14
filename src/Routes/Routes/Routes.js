import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../pages/Sheared/ErrorPage/ErrorPage";
import Home from '../../pages/Home/Home/Home'
import Register from "../../pages/Authintication/Register/Register";
import Login from "../../pages/Authintication/Login/Login";
import DashboardLayout from "../../layout/DashboardLayout";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import AllSellers from "../../pages/AllSellers/AllSellers/AllSellers";
import AllBuyer from "../../pages/AllSellers/AllBuyer/AllBuyer";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Payment from "../../pages/Payment/Payment";
import AdminRoute from "../AdminRoute/AdminRoute";
import SignUp from "../../pages/Authintication/Register/SignUp";
import SignUpRefer from "../../pages/Authintication/Register/SignUpRefer";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup/candidate',
                element: <Register></Register>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signup/referrer',
                element: <SignUpRefer></SignUpRefer>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><PrivateRoute><AllSellers></AllSellers></PrivateRoute></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><PrivateRoute><AllBuyer></AllBuyer></PrivateRoute></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-twelfth-server.vercel.app/orders/${params.id}`)
            },
        ]

    }
])