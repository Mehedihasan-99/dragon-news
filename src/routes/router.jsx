import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../components/pages/CategoryNews";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import NewsDetails from "../components/pages/NewsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <Navigate to={"category/01"}></Navigate>
            },
            {
                path: 'category/:id',
                element: <CategoryNews />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news/:id',
        element: <NewsDetails />,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register />,
            },
        ]
    },
    {
        path: '*',
        element: <h2>Error</h2>
    },
])

export default router;