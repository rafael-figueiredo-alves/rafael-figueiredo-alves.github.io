import PageLanguagesImg from '/src/assets/PageTitleImg/PageLanguagesImg.png'
import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "../contexts/LanguageContext"
import { PageTitle } from '../components/Shared/PageTitle'
import { LanguageFrameworkCards } from '../components/Shared/LanguageFrameworkCards'
import { LanguagesFrameworks } from '../models/Interfaces'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'
import { GetDataFromJSONService } from '../services/GetDataFromJSONService'

const PageLanguagesAndFrameworks = () => {
    const {CurrentLanguage, Translate} = useContext(LanguageContext)
    const { ChangePage } = useContext(PageTitleContext)

    const [languagesFrameworks, setLanguagesFrameworks] = useState<LanguagesFrameworks[]>([])

    useEffect(() => { GetDataFromJSONService<LanguagesFrameworks>('Languages', CurrentLanguage).then(data => setLanguagesFrameworks(() => data)) }, [CurrentLanguage])

    useEffect(() => ChangePage(Pages.LanguagesFrameworks), [])

    return(
        <>
        <div className='d-md-none'>
        <PageTitle Image={PageLanguagesImg}>{Translate("Languages.Titulo", false)}</PageTitle>
        </div>
        {languagesFrameworks != null ? (languagesFrameworks.length <= 0 ?
            <p>{Translate("Languages.NotFound", false)}</p> :
            <LanguageFrameworkCards Content={languagesFrameworks} />) :
            <p>{Translate("Languages.NotFound", false)}</p> 
        }

        
        </>
    )
}

export default PageLanguagesAndFrameworks