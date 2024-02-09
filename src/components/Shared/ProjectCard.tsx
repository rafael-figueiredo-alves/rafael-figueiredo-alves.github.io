import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ProjectCardProps } from "../../models/Interfaces";
import BtnBack from '/src/assets/BtnBack.png';
import BtnNext from '/src/assets/BtnNext.png';
import { Chip } from "./Chip/Chip";
import { Carrousel } from "./Carrousel";

export const ProjectCard = (props: ProjectCardProps) => {
    const { Translate } = useContext(LanguageContext);

    const Teste: string[] = ["https://raw.githubusercontent.com/rafael-figueiredo-alves/eTasks/v2.0/assets/Screens/Conceitual_Mobile_Home_Light.png", "https://raw.githubusercontent.com/rafael-figueiredo-alves/eTasks/v2.0/assets/Screens/Conceitual_Mobile_Home_Dark.png"];

    return (
        <>
            <div className="container-fluid">
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
                        <h5 className="card-title">{props.Project[props.Indice].Title}</h5>
                        <p className="card-text">{props.Project[props.Indice].Description}</p>
                        <Carrousel Screenshots={Teste}/>
                        <Chip Kind={props.Project[props.Indice].Chip} />
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}