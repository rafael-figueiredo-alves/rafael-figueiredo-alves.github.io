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

export interface Projects{
    Title: string,
    Version: string,
    Description: string,
    GithubLink: string,
    Screenshots: string[],
    Technology: ChipKind[],
    Platform: ChipKind[],
    Tags: string[],
    Goals: Goals[],
    Kind: ProjectKind[],
    DownloadLink: DownloadLink[],
    Site: string
}

interface Goals{
    Goal: string,
    Reached: boolean
}

export enum ProjectKind{
    MobileApp,
    DesktopApp,
    Site,
    Lib,
    Componente,
    WebApp,
    API
}

interface DownloadLink{
    Tipo: DownloadTipo,
    Link: string
}

export enum DownloadTipo{
    AndroidAPK,
    WindowsExe,
    LibZip,
    Site
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

//#region Interfaces do Modelo da Classe Linguagens e Frameworks
export interface LanguagesFrameworks{
    LanguageFramework: string,
    Skills: string[],
    ExtraInfo: string,
    Description: string,
    Level: number
}
//#endregion

//#region Interfaces do Modelo de classe Ferramentas
export interface Tools{
    Tool: string,
    Skills: string[],
    ExtraInfo: string,
    Level: number,
    Description: string
}
//#endregion