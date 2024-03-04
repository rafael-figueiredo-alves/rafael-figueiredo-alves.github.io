import { createContext, useState } from "react";

export enum Pages{
    Home,
    About,
    Contatcs,
    Experience,
    LanguagesFrameworks,
    Projects,
    Tools
}

export const PageTitleContext = createContext(
    {
        CurrentPage: Pages.Home,
        ChangePage: (page: Pages) => {
            page;
        }
    }
);

export const PageTitleProvider = (props: any) => {
    const [CurrentPage, setCurrentPage] = useState(Pages.Home);

    const ChangePage = (page: Pages) => {
        setCurrentPage(() => page);
    }

    return <PageTitleContext.Provider value={{CurrentPage, ChangePage}}>{props.children}</PageTitleContext.Provider>;
};