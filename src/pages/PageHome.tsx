import PageHomeImg from '/src/assets/PageHomeTitle.png'

import { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'

const PageHome = () => {
    const {Translate} = useContext(LanguageContext)

    return (
        <>
            <PageTitle Image={PageHomeImg}>{Translate("Home.Titulo", false)}</PageTitle>
            
        </>
    )
}

export default PageHome;