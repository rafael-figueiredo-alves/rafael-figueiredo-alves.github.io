import { useContext } from 'react'
import PageToolsImg from '/src/assets/PageTitleImg/PageToolsImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { GoalsList } from '../components/Shared/GoalsList'
import { ToolImg, Tools } from '../models/Interfaces'
import { ToolCard } from '../components/Shared/ToolCard'

const PageTools = () => {
    const { Translate } = useContext(LanguageContext)
    let Lista: any[] = [{ Goal: "Teste 1", Reached: true }, { Goal: "Teste 2", Reached: false }, { Goal: "Teste 3 e último", Reached: true }]
    let Teste: Tools = { ToolImg: ToolImg.Access, Tool: "Teste do Componente", Description: "Teste da descrção que será carregada para  aferramenta em questão", Skills: ["Habilidade 1", "Habilidade 2"] };

    return (
        <>
            <PageTitle Image={PageToolsImg}>{Translate("Tools.Titulo", false)}</PageTitle>
            <GoalsList Goals={Lista} />

            <div className="container">
                <div className="row">
                    <ToolCard Tool={Teste} />
                    <ToolCard Tool={Teste} />
                    <ToolCard Tool={Teste} />
                    <ToolCard Tool={Teste} />
                </div>
            </div>
        </>
    )
}

export default PageTools