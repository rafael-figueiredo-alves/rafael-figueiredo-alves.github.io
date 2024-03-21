//#region Images sources
import BtnBack from '/src/assets/UI/BtnBack.png';
import BtnNext from '/src/assets/UI/BtnNext.png';
//#endregion

//#region Imports
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ChipKind, DownloadLink, ProjectCardProps, ProjectKind } from "../../models/Interfaces";
import { Chip } from "./Chip/Chip";
import { Carrousel } from "./Carrousel";
import { ProjectKindBadge } from './ProjectKindBadges/ProjectKindBadge';
import { DownloadButton } from './DownloadButton/DownloadButton';
import { Tags } from './Tags';
import { RenderHTML } from '../../utils/Functions';
import { GoalsList } from './GoalsList';
//#endregion

export const ProjectCard = (props: ProjectCardProps) => {
    const { Translate } = useContext(LanguageContext);

    return (
        <>
            <div className="container-fluid" style={{ padding: '0px' }}>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-2 text-start">
                                {props.Indice > 0 && (
                                    <img src={BtnBack} style={{ cursor: "pointer" }} width={32} height={32} onClick={props.BtnAnteriorClick} alt={Translate("UI-Elements.BtnAnterior", false)} data-bs-toggle="tooltip" data-bs-placement="bottom" title={Translate("UI-Elements.BtnAnterior", false)} />
                                )}
                            </div>
                            <div className="col-8 text-center">
                                <h4 style={{ margin: "2px 0px 0px 0px" }}>{props.Project[props.Indice].Title}</h4>
                            </div>
                            <div className="col-2 text-end">
                                {props.Indice < props.Project.length - 1 && (
                                    <img src={BtnNext} style={{ cursor: "pointer" }} width={32} height={32} onClick={props.BtnProximoClick} alt={Translate("UI-Elements.BtnProximo", false)} data-bs-toggle="tooltip" data-bs-placement="bottom" title={Translate("UI-Elements.BtnProximo", false)} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{Translate("Projects.Versao", false)}</h5>
                        <div className='row'>
                            <div className='col-6 text-start'>
                                {props.Project[props.Indice].Version}
                            </div>
                            <div className='col-6 text-end'>
                                {props.Project[props.Indice].Kind.length > 0 && (
                                    props.Project[props.Indice].Kind.map((PrjKind: ProjectKind) => {
                                        return <ProjectKindBadge Kind={PrjKind} />
                                    })
                                )}
                            </div>
                        </div>
                        <h5 className="card-title">{Translate("Projects.GithubLink", false)}</h5>
                        <a className='mb-1' href={props.Project[props.Indice].GithubLink}>{props.Project[props.Indice].GithubLink}</a>
                        <br />
                        <h5 className="card-title">{Translate("Projects.Descricao", false)}</h5>
                        <p className="card-text className='mb-1'">{RenderHTML(props.Project[props.Indice].Description)}</p>

                        {props.Project[props.Indice].Goals != null && props.Project[props.Indice].Goals.length > 0 && (
                            <>
                                <h5 className="card-title">{Translate("Projects.Objetivos", false)}</h5>
                                <GoalsList Goals={props.Project[props.Indice].Goals} />
                            </>
                        )
                        }
                        <br />

                        {props.Project[props.Indice].Technology.length > 0 && (
                            <>
                                <h5 className="card-title">{Translate("Projects.Tecnologias", false)}</h5>
                                {props.Project[props.Indice].Technology.map((Technology: ChipKind) => {
                                    return <Chip Kind={Technology} />
                                })}
                            </>
                        )}
                        <br /><br />

                        {props.Project[props.Indice].Platform.length > 0 && (
                            <>
                                <h5 className="card-title">{Translate("Projects.Plataformas", false)}</h5>
                                {props.Project[props.Indice].Platform.map((Platform: ChipKind) => {
                                    return <Chip Kind={Platform} />
                                })}
                            </>

                        )}
                        <br /><br />

                        {props.Project[props.Indice].Screenshots != null && props.Project[props.Indice].Screenshots.length > 0 && (
                            <>
                                <h5 className="card-title">{Translate("Projects.Screenshots", false)}</h5>
                                <Carrousel Screenshots={props.Project[props.Indice].Screenshots} />
                            </>
                        )
                        }
                        <br /><br />
                        {props.Project[props.Indice].Tags != null && props.Project[props.Indice].Tags.length > 0 && (
                            <>
                                <h5 className="card-title">{Translate("Projects.Marcas", false)}</h5>
                                <Tags TagList={props.Project[props.Indice].Tags} />
                            </>
                        )}
                        <br /><br />

                        {props.Project[props.Indice].DownloadLink != null && props.Project[props.Indice].DownloadLink.length > 0 && (
                            <>
                                <h5 className="card-title">{Translate("Projects.Downloads", false)}</h5>
                                {props.Project[props.Indice].DownloadLink.map((DownLink: DownloadLink) => {
                                    return <DownloadButton Tipo={DownLink.Tipo} Link={DownLink.Link} />
                                })}
                            </>
                        )}
                        <br /><br />
                        {props.Project[props.Indice].Site != null && props.Project[props.Indice].Site != "" && (
                            <>
                                <h5 className="card-title">{Translate("Projects.Site", false)}</h5>
                                <a href={props.Project[props.Indice].Site}>{props.Project[props.Indice].Site}</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}