import { useContext } from 'react'
import PageAboutImg from '/src/assets/PageTitleImg/PageAboutImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { Tags } from '../components/Shared/Tags'

const PageAbout = () => {
    const { Translate } = useContext(LanguageContext)
    let marcas: string[] = ["Delphi","Portfolio","C Sharp","Flutter","Firebase","Sitema de vendas","Praticando","Delphi","Portfolio","C Sharp","Flutter","Firebase","Sitema de vendas","Praticando","Delphi","Portfolio","C Sharp","Flutter","Firebase","Sitema de vendas","Praticando"];

    return (
        <>
            <PageTitle Image={PageAboutImg}>{Translate("About.Titulo", false)}</PageTitle>
            <br />
            <Tags TagList={marcas} />
        </>
    )
}

export default PageAbout