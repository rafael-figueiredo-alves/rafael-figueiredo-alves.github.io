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

export interface Goals{
    Goal: string,
    Reached: boolean
}

export enum ProjectKind{
    MobileApp,
    DesktopApp,
    Site,
    Lib,
    Componente,
    ConsoleApp,
    API
}

export interface DownloadLink{
    Tipo: DownloadTipo,
    Link: string
}

export enum DownloadTipo{
    AndroidAPK,
    WindowsExe,
    LibZip,
    NuGet,
    SourceCodeZip,
    NPM,
    Site
}
//#endregion

//#region Interfaces do Modelo da Classe Linguagens e Frameworks
export interface LanguagesFrameworks{
    Name: string,
    Description: string,
    Skills: string[],
    LangFramework: LangFramework
}

export enum LangFramework{
    AspNet,
    Blazor,
    Bootstrap,
    CSharp,
    DartFlutter,
    Delphi,
    Excel,
    HTMLCSS,
    Javascript,
    Lazarus,
    Materialize,
    NextJS,
    NodeJS,
    Python,
    React,
    Rust,
    Typescript,
    Vite
}
//#endregion

//#region Interfaces do Modelo de classe Ferramentas
export interface Tools{
    Tool: string,
    Skills: string[],
    Description: string,
    ToolImg: ToolImg
}

export enum ToolImg{
    Word,
    Excel,
    PowerPoint,
    Access,
    Publisher,
    SQLManagement,
    SQLLite,
    SQLServer,
    Lunacy,
    Figma,
    PenPot,
    GIMP,
    Firebase,
    MySQL,
    MongoDB,
    VS,
    RadStudio,
    VSCode,
    Github,
    Bitbucket,
    NPM,
    NuGet,
    Git
}
//#endregion

//#region Interfaces dos componentes

//#region Interfaces das props do componente ProjectCard
export interface ProjectCardProps {
    Project: iProjects[],
    Indice: number,
    BtnAnteriorClick: () => void,
    BtnProximoClick: () => void
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
    Windows = 25,
    Web = 26
}

export interface ChipProps {
    Kind: ChipKind
}
//#endregion


//#endregion

