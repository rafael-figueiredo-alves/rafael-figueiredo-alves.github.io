const Language_Store_Key = 'Language';

export const getLanguage = (): string  => {
    const defaultLanguage = navigator.language || 'pt-BR';
    const Result = localStorage.getItem(Language_Store_Key) || defaultLanguage;
    return Result;
}

export const saveLanguage = (Language: string) => {
    localStorage.setItem(Language_Store_Key, Language);
}