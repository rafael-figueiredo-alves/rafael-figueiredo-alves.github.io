import { useContext, useEffect } from 'react'
import PageAboutImg from '/src/assets/PageTitleImg/PageAboutImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'

const PageAbout = () => {
    const { Translate } = useContext(LanguageContext);
    const { ChangePage } = useContext(PageTitleContext);

    useEffect(() => ChangePage(Pages.About), [])

    return (
        <>
            <div className='d-md-none'>
                <PageTitle Image={PageAboutImg}>{Translate("About.Titulo", false)}</PageTitle>
            </div>
        </>
    )
}

export default PageAbout