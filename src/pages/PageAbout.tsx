import { useContext } from 'react'
import PageAboutImg from '/src/assets/PageAboutImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/PageTitle'

const PageAbout = () => {
    const {Translate} = useContext(LanguageContext)

    return(
        <PageTitle Image={PageAboutImg}>{Translate("About.Titulo", false)}</PageTitle>
    )
}

export default PageAbout