import { useContext, useEffect } from 'react'
import PageAboutImg from '/src/assets/PageTitleImg/PageAboutImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'
import MyPhoto from '/src/assets/MyPhoto.png'
import Languages from '/src/assets/Languages.png'
import Jobs from '/src/assets/Jobs.png'

const PageAbout = () => {
    const { Translate } = useContext(LanguageContext);
    const { ChangePage } = useContext(PageTitleContext);

    useEffect(() => ChangePage(Pages.About), [])

    return (
        <>
            <div className='d-md-none'>
                <PageTitle Image={PageAboutImg}>{Translate("About.Titulo", false)}</PageTitle>
            </div>
            
            <div className='container-fluid row'>
                <div className='col-12 col-md-4 text-center'>
                    <img src={MyPhoto} height={200} width={200} alt='Developer' />
                    <figcaption><strong>Rafael de Figueiredo Alves</strong></figcaption>
                </div>
                <div className='col-12 col-md-8'>
                    {Translate("About.ParagrafoInicial", true)}
                </div>
            </div>
            
            <div className='container-fluid row mt-4'>
            <div className='col-12 col-md-8'>
                    {Translate("About.ParagrafoLinguagens", true)}
                </div>
                <div className='col-12 col-md-4 text-center'>
                    <img src={Languages} height={200} width={200} alt='Languages' />
                    <figcaption><strong>Delphi, C Sharp, Blazor, Lazarus</strong></figcaption>
                </div>
            </div>

            <div className='container-fluid row mt-4 mb-5'>
                <div className='col-12 col-md-4 text-center'>
                    <img src={Jobs} height={200} width={200} alt='Jobs' />
                    <figcaption><strong>CCAA, RZ Sistemas</strong></figcaption>
                </div>
                <div className='col-12 col-md-8'>
                    {Translate("About.ParagrafoTrabalhos", true)}
                </div>
            </div>
        </>
    )
}

export default PageAbout