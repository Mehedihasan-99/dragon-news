import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import CategoryNews from "../components/pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '',
                element: <Navigate to={"category/01"}></Navigate>
            },
            {
                path: 'category/:id',
                element: <CategoryNews/>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <h3>news</h3>,
    },
    {
        path: 'login',
        element: <h3>login</h3>
    }
])

export default router;