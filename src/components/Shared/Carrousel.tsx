import { useState } from "react";
import { ModalImage } from "./ModalImage";
import '/src/components/Shared/Carrousel.css';

export const Carrousel = ({ Screenshots }: { Screenshots: string[] }) => {
    const [Exibir, setExibir] = useState(false);
    const [Msg, setMsg] = useState("");

    const OnClose = () => {
        setExibir(() => false)
    }

    const OnImageClick = (texto: string) => {
        setMsg(() => texto);
        setExibir(() => true);
    }

    return (
        <>
            <div id="carousel" className="carousel carousel-dark slide">
                <div className="carousel-inner" style={{width: '100%', height: '100px !important', objectFit: 'contain'}}>
                    {Screenshots.map((screenshot, Indice) => {
                        return (
                            <div key={screenshot} className={`carousel-item ${Indice == 0 ? 'active' : ''}`}>
                                <div className="d-flex justify-content-center align-items-center">
                                <img src={screenshot} style={{cursor: "pointer", height: "300px"}} className="img-fluid" alt={screenshot} onClick={() => OnImageClick(screenshot)} />
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> 

            <ModalImage Title='Exibindo screenshot' imgSRC={Msg} onClose={OnClose} show={Exibir} />         
        </>
    )
}