//#region Images sources
import BtnBack from '/src/assets/UI/BtnBack.png';
import BtnNext from '/src/assets/UI/BtnNext.png';
//#endregion

//#region Imports
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { DownloadTipo, ProjectCardProps, ProjectKind } from "../../models/Interfaces";
import { Chip } from "./Chip/Chip";
import { Carrousel } from "./Carrousel";
import { ProjectKindBadge } from './ProjectKindBadges/ProjectKindBadge';
import { DownloadButton } from './DownloadButton/DownloadButton';
//#endregion

export const ProjectCard = (props: ProjectCardProps) => {
    const { Translate } = useContext(LanguageContext);

    const Teste: string[] = ["https://raw.githubusercontent.com/rafael-figueiredo-alves/eTasks/v2.0/assets/Screens/Conceitual_Mobile_Home_Light.png", "https://raw.githubusercontent.com/rafael-figueiredo-alves/eTasks/v2.0/assets/Screens/Conceitual_Mobile_Home_Dark.png"];

    return (
        <>
            <div className="container-fluid" style={{padding: '0px'}}>
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
                        <h5 className="card-title">Versão</h5>
                        <div className='row'>
                            <div className='col-6 text-start'>
                                1.0.0
                            </div>
                            <div className='col-6 text-end'>
                                <ProjectKindBadge Kind={ProjectKind.DesktopApp} />
                                <ProjectKindBadge Kind={ProjectKind.MobileApp} />
                                <ProjectKindBadge Kind={ProjectKind.API} />
                            </div>
                        </div>
                        <h5 className="card-title">Descrição</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque praesentium est possimus accusamus fuga aperiam voluptate dolor, non eaque delectus, inventore maiores consectetur cumque. Iusto in voluptatem blanditiis. Eum.</p>
                        <br />
                        <h5 className="card-title">Tecnologias</h5>
                        <Chip Kind={props.Project[props.Indice].Chip} />
                        <br /><br />
                        <h5 className="card-title">Plataformas</h5>
                        <Chip Kind={props.Project[props.Indice].Chip} />
                        <br /><br />
                        <h5 className="card-title">Prints</h5>
                        <Carrousel Screenshots={Teste}/>
                        <DownloadButton Tipo={DownloadTipo.AndroidAPK} />
                    </div>
                </div>
            </div>
        </>
    )
}