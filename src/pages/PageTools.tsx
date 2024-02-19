import { useContext } from 'react'
import PageToolsImg from '/src/assets/PageTitleImg/PageToolsImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { GoalsList } from '../components/Shared/GoalsList'

const PageTools = () => {
    const {Translate} = useContext(LanguageContext)
    let Lista:any[] = [{Goal: "Teste 1", Reached: true}, {Goal: "Teste 2", Reached: false}, {Goal: "Teste 3 e último", Reached: true}]

    return(
        <>
        <PageTitle Image={PageToolsImg}>{Translate("Tools.Titulo", false)}</PageTitle>
        <GoalsList Goals={Lista} />
        </>
    )
}

export default PageTools