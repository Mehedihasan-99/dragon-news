import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <div><h1 className="text-3xl bg-blue-300 font-bold underline text-red-600">
        Hello world!
    </h1>
    <h2 className="text-4xl font-bold text-green-400">hello</h2></div>
    }
])

export default router;