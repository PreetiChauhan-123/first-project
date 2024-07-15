import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import AllUser from "../components/AllUser";
import CreateUser from "../components/CreateUser";
import UpdateUser from "../components/UpdateUser";

export const routes=createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<LandingPage/>,
                children:[
                    {
                        path:"/",
                        element:<Login/>
                    },
                    {
                        path:"/signup",
                        element:<Signup/>
                    },
                    {
                        path:"/contact",
                        element:<Contact/>
                    }
                ]
            },
            {
                path:"/home",
                element:<HomePage/>,
                children:[
                    {
                        path:"/home",
                        element:<AllUser/>
                    },
                    {
                        path:"/home/createUser",
                        element:<CreateUser/>
                    },
                    {
                        path:"/home/updateUser",
                        element:<UpdateUser/>
                    }
                   
                ]
            },
           
        ]
    }
])