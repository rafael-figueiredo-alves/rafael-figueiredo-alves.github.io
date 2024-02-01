//Serviços para ler a língua/idioma do browser no primeiro acesso, guardar a língua/idioma setado por último e reler diretamente do
//localstorage

//chave onde será armazenado o idioma em uso
const Language_Store_Key = 'Language';

//Função para ler o idioma do Browser e/ou ler do Localstorage
export const getLanguage = (): string  => {
    const defaultLanguage = navigator.language || 'pt-BR'; //Aqui carrega o idioma padrão do Browser
    const Result = localStorage.getItem(Language_Store_Key) || defaultLanguage; //Lê o valor do Localstorage, se não houver, retorna o valor do Browser
    return Result;
}

//Função para salvar idioma no Localstorage
export const saveLanguage = (Language: string) => {
    localStorage.setItem(Language_Store_Key, Language);
}