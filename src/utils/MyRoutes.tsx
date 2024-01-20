//Este arquivo abriga todas as rotas da aplicação. Os paths são "strings" na classe estática Rotas para padronizar

import { createBrowserRouter } from "react-router-dom";

//<---Imports das páginas/layouts do sistema -->
import Home from "../pages/Home";
import ErroPage from "../pages/ErroPage";
import MainLayout from "../layouts/MainLayout";
import Contacts from "../pages/Contacts";


//<--- Criador e gerenciador das Rotas do sistema --->
const MyRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErroPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contacts",
                element: <Contacts />
            }
        ],
    },
]);

export default MyRoutes;