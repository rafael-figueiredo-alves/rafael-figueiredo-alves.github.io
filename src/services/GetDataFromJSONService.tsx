//Este arquivo contém o serviço GetDataFromJSONService cujo objetivo é ser o mais genérica possível e ler o conteúdo de um arquivo
//JSON de dentro da pasta Data no diretório público, passando o nome da data que deseja carregar e a língua/idioma

export const GetDataFromJSONService = <T extends unknown>(data: string, language: string): Promise<T[]> => {
    return fetch(`/data/${data}-${language}.json`)
      .then(response => response.json())
      .then(data => data);
  }