import PageLanguagesImg from '/src/assets/PageTitleImg/PageLanguagesImg.png'
import { useContext, useEffect } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { PageTitle } from '../components/Shared/PageTitle'
import { LanguageFrameworkCards } from '../components/Shared/LanguageFrameworkCards'
import { LangFramework, LanguagesFrameworks } from '../models/Interfaces'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'

const PageLanguagesAndFrameworks = () => {
    const {Translate} = useContext(LanguageContext)
    const { ChangePage } = useContext(PageTitleContext)

    useEffect(() => ChangePage(Pages.LanguagesFrameworks), [])

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
        <div className='d-md-none'>
        <PageTitle Image={PageLanguagesImg}>{Translate("Languages.Titulo", false)}</PageTitle>
        </div>
        <LanguageFrameworkCards Content={frameworks} />
        </>
    )
}

export default PageLanguagesAndFrameworks