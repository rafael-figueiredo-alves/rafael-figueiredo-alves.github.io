export const ModalImage = ({ show, Title, imgSRC, onClose }: { show: boolean, Title: string, imgSRC: string, onClose: any }) => {
    if (!show) return null;

    return (
        <>
            <div className="modal-backdrop show"></div>

            <div className="modal show" tabIndex={-1} role="dialog"
                aria-hidden="true" style={{ display: "block" }}>
                <div className="modal-dialog modal-dialog-centered modal-fullscreen" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{Title}</h5>
                            <button onClick={onClose} type="button" className="btn-close"
                                data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div className="modal-body @Theme!.ColorClass">
                            <img src={imgSRC} className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
</>
  );

};