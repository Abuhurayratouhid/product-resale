import AllOrders from "../Pages/Dashboard/AllOrders";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Buyers from "../Pages/Dashboard/Buyers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import Sellers from "../Pages/Dashboard/Sellers";
import AllProducts from "../Pages/Home/AllProducts";
import SignUp from "../Pages/SignUp/SignUp";
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
                element: <AllUsers></AllUsers>,
            },
            {
                path: '/dashboard/allOrders',
                element: <AllOrders></AllOrders>,
            },
            {
                path: '/dashboard/sellers',
                element: <Sellers></Sellers>,
            },
            {
                path: '/dashboard/buyers',
                element: <Buyers></Buyers>,
            },
        ]
    }
])

export default router;