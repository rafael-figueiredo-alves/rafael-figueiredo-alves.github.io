import PageLanguagesImg from '/src/assets/PageLanguagesImg.png'
import { useContext } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { PageTitle } from '../components/PageTitle'

const PageLanguagesAndFrameworks = () => {
    const {Translate} = useContext(LanguageContext)

    return(
        <PageTitle Image={PageLanguagesImg}>{Translate("Languages.Titulo", false)}</PageTitle>
    )
}

export default PageLanguagesAndFrameworks