import { useContext } from 'react'
import PageAboutImg from '/src/assets/PageTitleImg/PageAboutImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'

const PageAbout = () => {
    const { Translate } = useContext(LanguageContext)


    return (
        <>
            <PageTitle Image={PageAboutImg}>{Translate("About.Titulo", false)}</PageTitle>
        </>
    )
}

export default PageAbout