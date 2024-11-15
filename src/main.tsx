import {createRoot} from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import React from 'react';
import App from "./App.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
]);


createRoot(document.getElementById('root')!).render(
    < React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)



