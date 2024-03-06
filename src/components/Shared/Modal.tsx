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
                <div className="row">
                    <div className="col-12 col-md-4 justify-content-center text-center">
                        <svg fill="#336699" width={100} height={100} viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <title>success-standard-line</title> 
                                <path className="clr-i-outline clr-i-outline-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"></path>
                                <path className="clr-i-outline clr-i-outline-path-2" d="M28,12.1a1,1,0,0,0-1.41,0L15.49,23.15l-6-6A1,1,0,0,0,8,18.53L15.49,26,28,13.52A1,1,0,0,0,28,12.1Z"></path>
                                <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect>
                            </g>
                        </svg>
                    </div>
                    <div className="col-12 col-md-8 align-middle justify-content-start text-start">
                        {Message}
                    </div>
                </div>
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