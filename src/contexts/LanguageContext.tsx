import { createContext, useEffect, useState } from "react";
import { getLanguage, saveLanguage } from "../services/LanguageService";
import { RenderHTML } from "../utils/Functions";
import { Translations } from "./Translations";
import { iTranslation } from "../models/Interfaces";

export const LanguageContext = createContext(
    {
        CurrentLanguage: "pt-BR",
        ChangeLanguage: () => {},
        Translate: (Chave: string, Formatado: boolean = true):any => {
            const _Translations: iTranslation = Translations;

            let valores = Chave.split(".");

            if(Formatado)
                return RenderHTML(_Translations["pt-BR"][valores[0]][valores[1]]);
            else
            return _Translations["pt-BR"][valores[0]][valores[1]];            
        },
    }
);

export const LanguageProvider = (props: any) => {
    const [CurrentLanguage, setCurrentLanguage] = useState(getLanguage);

    const _Translations: iTranslation = Translations;

    useEffect(() => saveLanguage(CurrentLanguage), [CurrentLanguage]);

    const ChangeLanguage = () => {
        setCurrentLanguage(() => CurrentLanguage === "pt-BR" ? "en" : "pt-BR");
    }

    const Translate = (Chave: string, Formatado: boolean = true): any => {
        let valores = Chave.split(".");

        if(Formatado)
            return RenderHTML(_Translations[CurrentLanguage][valores[0]][valores[1]]);
        else
        return _Translations[CurrentLanguage][valores[0]][valores[1]];
    }

    return <LanguageContext.Provider value={{CurrentLanguage, ChangeLanguage, Translate}}>{props.children}</LanguageContext.Provider>;
};