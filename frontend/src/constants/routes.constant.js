import Home from "../pages/home.page"
import Signup from "../pages/signup.page"
import Login from "../pages/login.page"

export const PRIVATE_ROUTES = [
    {
        path:"/",
        component:<Home />,
    }
]
export const PUBLIC_ROUTES = [
    {
        path:"/login",
        component:<Login />,
    },{
        path:"/signup",
        component:<Signup />,
    },
]