import '/src/components/Offcanvas.css';
import { Sidebar } from "./Sidebar"

export const Offcanvas = () => {
    return(
        <div className="offcanvas offcanvas-start Offcanvas_style" id="SidebarOffcanvas" aria-labelledby="Side bar - Offcanvas">
            <div className="offcanvas-header justify-content-end" data-bs-theme="dark">
                <button type="button" className="btn-close btnFechar" data-bs-dismiss="offcanvas" aria-label="Close">
                </button>
            </div>
            <div className="offcanvas-body OffCanvasBody">
                {/* Inserir aqui o componente sidebar para inserir o conteúdo */}
                <Sidebar />
            </div>
        </div>
    )
}