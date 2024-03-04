import { useContext, useEffect } from 'react'
import PageAboutImg from '/src/assets/PageTitleImg/PageAboutImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { Tags } from '../components/Shared/Tags'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'

const PageAbout = () => {
    const { Translate } = useContext(LanguageContext);
    const { ChangePage } = useContext(PageTitleContext);

    useEffect(() => ChangePage(Pages.About), [])


    let marcas: string[] = ["Delphi","Portfolio","C Sharp","Flutter","Firebase","Sitema de vendas","Praticando","Delphi","Portfolio","C Sharp","Flutter","Firebase","Sitema de vendas","Praticando","Delphi","Portfolio","C Sharp","Flutter","Firebase","Sitema de vendas","Praticando"];

    return (
        <>
        <div className='d-md-none'>
            <PageTitle Image={PageAboutImg}>{Translate("About.Titulo", false)}</PageTitle>
            </div>
            <br />
            <Tags TagList={marcas} />
        </>
    )
}

export default PageAbout