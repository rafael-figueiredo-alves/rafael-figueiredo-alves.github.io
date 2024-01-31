import { useContext } from 'react'
import PageProjectsImg from '/src/assets/PageProjectsImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/PageTitle'

const PageProjects = () => {
    const {Translate} = useContext(LanguageContext)

    return(
        <PageTitle Image={PageProjectsImg}>{Translate("Projects.Titulo", false)}</PageTitle>
    )
}

export default PageProjects