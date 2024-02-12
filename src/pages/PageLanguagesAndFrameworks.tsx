import PageLanguagesImg from '/src/assets/PageTitleImg/PageLanguagesImg.png'
import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { PageTitle } from '../components/Shared/PageTitle'
import { LanguageFrameworkCards } from '../components/Shared/LanguageFrameworkCards'
import { LangFramework, LanguagesFrameworks } from '../models/Interfaces'

const PageLanguagesAndFrameworks = () => {
    const {Translate} = useContext(LanguageContext)

    const frameworks: LanguagesFrameworks[] = [
        {
            Name: "React",
            Description: "A JavaScript library for building user interfaces",
            Skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
            LangFramework: LangFramework.Javascript,
        },
        {
            Name: "Delphi",
            Description: "Teste do Delphi",
            Skills: ["JavaScript", "TypeScript", "HTML", "CSS"],
            LangFramework: LangFramework.Delphi,
        },        
        // Adicione mais objetos conforme necessário
    ];

    return(
        <>
        <PageTitle Image={PageLanguagesImg}>{Translate("Languages.Titulo", false)}</PageTitle>
        <LanguageFrameworkCards Content={frameworks} />
        </>
    )
}

export default PageLanguagesAndFrameworks