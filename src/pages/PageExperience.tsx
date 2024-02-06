import { useContext } from 'react'
import { PageTitle } from '../components/Shared/PageTitle'
import PageExperienceImg from '/src/assets/PageExperienceImg.png'
import { LanguageContext } from '../contexts/LanguageContext'

const PageExperience = () => {
    const {Translate} = useContext(LanguageContext);

    return(
        <>
        <PageTitle Image={PageExperienceImg}>{Translate("Experience.Titulo", false)}</PageTitle>
        </>
    )
}

export default PageExperience