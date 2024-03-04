import { useContext, useEffect } from 'react'
import PageToolsImg from '/src/assets/PageTitleImg/PageToolsImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { ToolImg, Tools } from '../models/Interfaces'
import { ToolCard } from '../components/Shared/ToolCard'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'

const PageTools = () => {
    const { Translate } = useContext(LanguageContext)
    const { ChangePage } = useContext(PageTitleContext)

    useEffect(() => ChangePage(Pages.Tools), [])

    let Teste: Tools = { ToolImg: ToolImg.Access, Tool: "Teste do Componente", Description: "Teste da descrção que será carregada para  aferramenta em questão", Skills: ["Habilidade 1", "Habilidade 2"] };

    return (
        <>
            <div className='d-md-none'>
            <PageTitle Image={PageToolsImg}>{Translate("Tools.Titulo", false)}</PageTitle>
            </div>

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