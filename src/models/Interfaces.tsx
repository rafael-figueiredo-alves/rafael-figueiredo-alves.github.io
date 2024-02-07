//#region Interface relacionada a tradução da tela
interface TranslationKey {
    [key: string]: string
}

interface TranslationScreen {
    [key: string]: TranslationKey
}

export interface iTranslation {
    [key: string]: TranslationScreen
}
//#endregion

//#region Interfaces do componente Chip
export enum ChipKind {
    Android = 1,
    Blazor = 2,
    Bootstrap = 3,
    CSharp = 4,
    CSS3 = 5,
    Dart = 6,
    Delphi = 7,
    ExcelVBA = 8,
    Firebase = 9,
    Flutter = 10,
    HTML5 = 11,
    iOS = 12,
    Javascript = 13,
    Lazarus = 14,
    Linux = 15,
    MongoDB = 16,
    Multiplatform = 17,
    MySQL = 18,
    Python = 19,
    ReactJS = 20,
    Rust = 21,
    SQLite = 22,
    Typescript = 23,
    Vite = 24,
    Windows = 25
}

export interface ChipProps {
    Kind: ChipKind
}
//#endregion

//#region Interface do Modelo da classe Projetos
export interface iProjects{
    Title: string,
    Version: string,
    Description: string,
    Chip: ChipKind
}
//#endregion

//#region Interfaces das props do componente ProjectCard
export interface ProjectCardProps {
    Project: iProjects[],
    Indice: number,
    BtnAnteriorClick: () => void,
    BtnProximoClick: () => void
}
//#endregion

