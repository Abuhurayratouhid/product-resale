import SignUp from "../Pages/SignUp/SignUp";

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
            }
        ]
    }
])

export default router;