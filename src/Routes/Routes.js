import AllOrders from "../Pages/Dashboard/AllOrders";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Buyers from "../Pages/Dashboard/Buyers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import MyOrders from "../Pages/Dashboard/MyOrders";
import Sellers from "../Pages/Dashboard/Sellers";
import AllProducts from "../Pages/Home/AllProducts";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivetRoute from "./PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Blog } = require("../Pages/Blog/Blog");
const { default: ErrorPage } = require("../Pages/ErrorPage/ErrorPage");
const { default: Home } = require("../Pages/Home/Home");
const { default: Login } = require("../Pages/Login/Login");

const router = createBrowserRouter([
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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories/:id',
                element: <PrivetRoute><AllProducts></AllProducts></PrivetRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/categoryBooks/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path: '/dashboard/allOrders',
                element: <AdminRoute><AllOrders></AllOrders></AdminRoute>,
            },
            {
                path: '/dashboard/sellers',
                element: <AdminRoute><Sellers></Sellers></AdminRoute>,
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><Buyers></Buyers></AdminRoute>,
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            }
        ]
    }
])

export default router;