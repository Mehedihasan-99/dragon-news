import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
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