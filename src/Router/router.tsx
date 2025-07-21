import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../components/layout/NotFound";
import MainLayout from "../views/Main/MainLayout";
import Home from "../pages/Home";
import GuestLayout from "../views/Guest/GuestLayout";
import SignUp from "../components/layout/SignUp";
import Register from "../components/layout/Register";
import Product from "../pages/Product";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import ProductInfomation from "../components/layout/ProductInfomation";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/',
                element: <Navigate to='/home' />
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/product-infomation',
                element: <ProductInfomation />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <SignUp/>
            },
            {
                path: '/register',
                element: <Register/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])