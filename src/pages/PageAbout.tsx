import { useContext } from 'react'
import PageAboutImg from '/src/assets/PageAboutImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { HorizontalCard } from '../components/Shared/HorizontalCard'

const PageAbout = () => {
    const { Translate } = useContext(LanguageContext)


    return (
        <>
            <PageTitle Image={PageAboutImg}>{Translate("About.Titulo", false)}</PageTitle>
            <HorizontalCard />
        </>
    )
}

export default PageAbout