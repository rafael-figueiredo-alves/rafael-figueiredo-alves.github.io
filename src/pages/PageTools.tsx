import { useContext } from 'react'
import PageToolsImg from '/src/assets/PageToolsImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'

const PageTools = () => {
    const {Translate} = useContext(LanguageContext)

    return(
        <PageTitle Image={PageToolsImg}>{Translate("Tools.Titulo", false)}</PageTitle>
    )
}

export default PageTools