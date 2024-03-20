import '/src/pages/PageExperience.css'
import { useContext, useEffect } from 'react'
import { PageTitle } from '../components/Shared/PageTitle'
import PageExperienceImg from '/src/assets/PageTitleImg/PageExperienceImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import RzSistemas from '/src/assets/Experience/RZ.png'
import CCAA from '/src/assets/Experience/CCAA.png'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'

const PageExperience = () => {
    const { Translate } = useContext(LanguageContext);
    const { ChangePage } = useContext(PageTitleContext);

    useEffect(() => ChangePage(Pages.Experience), []);

    return (
        <>
            <div className='d-md-none'>
                <PageTitle Image={PageExperienceImg}>{Translate("Experience.Titulo", false)}</PageTitle>
            </div>

            <div className='container-fluid row'>
                <div className='col-12 col-md-2 text-center'>
                    <img src={RzSistemas} height={100} width={100} />
                </div>
                <div className='col-12 col-md-9' style={{marginLeft: "10px", borderLeft: "solid 3px #336699"}}>
                    <h5>RZ Sistemas LTDA</h5>
                    {Translate("Experience.RzCargo", true)}
                    {Translate("Experience.RzPeriodo", true)}
                    {Translate("Experience.RzAtividades", true)}
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h5 className='Titulo_Habilidades'>{Translate("Experience.Abilities", false)}</h5>
                    <div className="main-timeline">
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-code"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">{Translate("Experience.RzAbilityTitle1", false)}</h3>
                                <p className="description">
                                   {Translate("Experience.RzAbilityDescription1", true)}
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-pen-ruler"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">{Translate("Experience.RzAbilityTitle2", false)}</h3>
                                <p className="description">
                                    {Translate("Experience.RzAbilityDescription2", true)}
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-people-group"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">{Translate("Experience.RzAbilityTitle3", false)}</h3>
                                <p className="description">
                                    {Translate("Experience.RzAbilityDescription3", true)}
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-shirt"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">{Translate("Experience.RzAbilityTitle4", false)}</h3>
                                <p className="description">
                                    {Translate("Experience.RzAbilityDescription4", true)}
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa-solid fa-puzzle-piece"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">{Translate("Experience.RzAbilityTitle5", false)}</h3>
                                <p className="description">
                                    {Translate("Experience.RzAbilityDescription5", true)}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className='container-fluid row mt-5'>
                <div className='col-12 col-md-2 text-center'>
                    <img src={CCAA} height={100} width={100} />
                </div>
                <div className='col-12 col-md-9' style={{marginLeft: "10px", borderLeft: "solid 3px #336699"}}>
                    <h5>CCAA - Centro Paulista de Cultura Anglo Americana LTDA.</h5>
                    {Translate("Experience.CCAACargo", true)}
                    {Translate("Experience.CCAAPeriodo", true)}
                    {Translate("Experience.CCAAAtividades", true)}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h5 className='Titulo_Habilidades'>Habilidades e/ou Destaques</h5>
                    <div className="main-timeline">
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-chalkboard-user"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">{Translate("Experience.CCAAAbilityTitle1", false)}</h3>
                                <p className="description">
                                    {Translate("Experience.CCAAAbilityDescription1", true)}
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-book"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">{Translate("Experience.CCAAAbilityTitle2", false)}</h3>
                                <p className="description">
                                    {Translate("Experience.CCAAAbilityDescription2", true)}
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-school"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">{Translate("Experience.CCAAAbilityTitle3", false)}</h3>
                                <p className="description">
                                    {Translate("Experience.CCAAAbilityDescription3", true)}
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-file-excel"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">{Translate("Experience.CCAAAbilityTitle4", false)}</h3>
                                <p className="description">
                                    {Translate("Experience.CCAAAbilityDescription4", true)}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}

export default PageExperience