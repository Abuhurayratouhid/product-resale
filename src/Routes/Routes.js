import AddProduct from "../Pages/Dashboard/AddProduct";
import AllOrders from "../Pages/Dashboard/AllOrders";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Buyers from "../Pages/Dashboard/Buyers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import MyOrders from "../Pages/Dashboard/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts";
import Sellers from "../Pages/Dashboard/Sellers";
import AllProducts from "../Pages/Home/AllProducts";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivetRoute from "./PrivetRoute";
import SellerRoute from "./SellerRoute";

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
                loader: ({params})=> fetch(`https://product-resale-server.vercel.app/categoryBooks/${params.id}`)
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
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
        ]
    }
])

export default router;