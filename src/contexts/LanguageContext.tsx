import { getLanguage, saveLanguage } from "../services/LanguageService";


const defaultLanguage = navigator.language || 'pt-BR';
export let currentLanguage = getLanguage() || defaultLanguage;


export const ChangeLanguage = (language: string) => {
    currentLanguage = language;
    saveLanguage(language);
}

export const Translate = (key: string) => {
    return key + " " + currentLanguage; 
}