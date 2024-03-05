export const Modal = ({show, Title, Message, onClose}:{show:boolean, Title: string, Message: string, onClose: any}) => {
    if (!show) return null;

  return(
    <>
<div className="modal-backdrop show"></div>

<div className="modal show" tabIndex={-1} role="dialog"
     aria-hidden="true" style={{display:"block"}}>
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">{Title}</h5>
                <button onClick={onClose} type="button" className="btn-close"
                        data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true"></span>
                        </button>
            </div>
            <div className="modal-body @Theme!.ColorClass">
                {Message}
            </div>
            <div className="modal-footer justify-content-center text-center">
                <button type="button" onClick={onClose} style={{width: "100px"}}
                        className="btn btn-success">
                    OK
                </button>
            </div>
        </div>
    </div>
</div>
</>
  );

};