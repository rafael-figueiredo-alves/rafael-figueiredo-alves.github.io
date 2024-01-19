import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const MyRoutes =createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <App />
            }
        ],
    },
]);

export default MyRoutes;