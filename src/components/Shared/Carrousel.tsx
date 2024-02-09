export const Carrousel = ({ Screenshots }: { Screenshots: string[] }) => {
    return (
        <>
            <div id="carousel" className="carousel slide">
                <div className="carousel-inner">
                    {Screenshots.map((screenshot, Indice) => {
                        return (
                            <div key={screenshot} className={`carousel-item ${Indice == 0 ? 'active' : ''}`}>
                                <div className="d-flex justify-content-center align-items-center" style={{ height: '100%', overflow: 'hidden' }}>
                                <img src={screenshot} className="d-block w-100" alt="..." />
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
        </>
    )
}