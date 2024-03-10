import { useContext, useEffect, useState } from 'react'
import PageToolsImg from '/src/assets/PageTitleImg/PageToolsImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { Tools } from '../models/Interfaces'
import { ToolCard } from '../components/Shared/ToolCard'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'
import { GetDataFromJSONService } from '../services/GetDataFromJSONService'

const PageTools = () => {
    const { CurrentLanguage, Translate } = useContext(LanguageContext)
    const { ChangePage } = useContext(PageTitleContext)

    const [ToolsCollection, setToolsCollection] = useState<Tools[]>([])

    useEffect(() => { GetDataFromJSONService<Tools>('Tools', CurrentLanguage).then(data => setToolsCollection(() => data)) }, [CurrentLanguage])

    useEffect(() => ChangePage(Pages.Tools), [])

    return (
        <>
            <div className='d-md-none'>
            <PageTitle Image={PageToolsImg}>{Translate("Tools.Titulo", false)}</PageTitle>
            </div>

            <div className="container">
                <div className="row">
                    {ToolsCollection != null ?
                    (ToolsCollection.length > 0 ? ToolsCollection.map((Tool: Tools, Indice: number) => {
                        return <ToolCard key={Indice} Tool={Tool} />
                    }) : <p>{Translate("Tools.NotFound", false)}</p>) : <p>{Translate("Tools.NotFound", false)}</p>}
                </div>
            </div>
        </>
    )
}

export default PageTools