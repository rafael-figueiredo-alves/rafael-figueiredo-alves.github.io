import { useContext } from 'react'
import PageToolsImg from '/src/assets/PageTitleImg/PageToolsImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'

const PageTools = () => {
    const {Translate} = useContext(LanguageContext)

    return(
        <>
        <PageTitle Image={PageToolsImg}>{Translate("Tools.Titulo", false)}</PageTitle>
        <p style={{fontSize: '1.5rem'}}><i className="fa-regular fa-circle-check"/> Teste objetivo</p>
        <p style={{fontSize: '1.5rem'}}><i className="fa-regular fa-circle"/> Teste de Objetivo 2</p>
        </>
    )
}

export default PageTools