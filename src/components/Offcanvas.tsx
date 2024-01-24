import { Sidebar } from "./Sidebar"

export const Offcanvas = () => {
    return(
        <div className="offcanvas offcanvas-start" id="SidebarOffcanvas" aria-labelledby="Side bar - Offcanvas" style={{backgroundColor: '#336699', color: 'White'}}>
            <div className="offcanvas-header justify-content-end" data-bs-theme="dark">
                <button type="button" style={{color: 'white'}} className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" style={{marginTop: -60}}>
                {/* Inserir aqui o componente sidebar para inserir o conteúdo */}
                <Sidebar />
            </div>
        </div>
    )
}