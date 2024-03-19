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
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-pen-ruler"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">{Translate("Experience.RzAbilityTitle2", false)}</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-people-group"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">Crescimento em equipe</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-shirt"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">Softwares para Têxtil e mais</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa-solid fa-puzzle-piece"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">Softwares para Têxtil e mais</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className='container-fluid row'>
                <div className='col-12 col-md-2 text-center'>
                    <img src={CCAA} height={100} width={100} />
                </div>
                <div className='col-12 col-md-9' style={{marginLeft: "10px", borderLeft: "solid 3px #336699"}}>
                    <h5>CCAA - Centro Paulista de Cultura Anglo Americana LTDA.</h5>
                    <strong>Cargo: </strong>Professor de Inglês/Coordenador<br />
                    <strong>Período: </strong>Fev/2008 - Dez/2021<br />
                    <strong>Atividades executadas: </strong>Manutenção de aplicativos legados Delphi como ERP, Cobs e até CAD para confecção. Trabalho com integrações como Inter, Shopify, Wake e outras. Também experiência em rotinas fiscais SPED e integração com MDFe. Desenvolvimento de software em Blazor e C#, tanto front-end como backend.
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h5 className='Titulo_Habilidades'>Habilidades e/ou Destaques</h5>
                    <div className="main-timeline">
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-chalkboard-user"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">Professor de Inglês</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-book"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">Método próprio</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-school"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">Aulas na unidade, em escolas e remotas</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" className="timeline">
                            <div className="timeline-icon"><i className="fa fa-file-excel"></i></div>
                            <div className="timeline-content">
                                <h3 className="title">Gerência de controles</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageExperience