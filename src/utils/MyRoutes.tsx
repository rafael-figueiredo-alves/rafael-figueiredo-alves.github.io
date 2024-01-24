//Este arquivo abriga todas as rotas da aplicação. Os paths são "strings" na classe estática Rotas para padronizar

import { createBrowserRouter } from "react-router-dom";

//<---Imports das páginas/layouts do sistema -->
import PageHome from "../pages/PageHome";
import PageError from "../pages/PageError";
import MainLayout from "../layouts/MainLayout";
import PageContacts from "../pages/PageContacts";
import PageLanguagesAndFrameworks from "../pages/PageLanguagesAndFrameworks";
import PageTools from "../pages/PageTools";
import PageExperience from "../pages/PageExperience";
import PageAbout from "../pages/PageAbout";


//<--- Criador e gerenciador das Rotas do sistema --->
const MyRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <PageError />, 
        children: [
            {
                path: "/",
                element: <PageHome />
            },
            {
                path: "/contacts",
                element: <PageContacts />
            },
            {
                path: "/langagesandframeworks",
                element: <PageLanguagesAndFrameworks />
            },
            {
                path: "/tools",
                element: <PageTools />
            },
            {
                path: "/experience",
                element: <PageExperience />
            },
            {
                path: "/about",
                element: <PageAbout />
            }
        ],
    },
]);

export default MyRoutes;