import { LanguageButton } from './LanguageButton'
import { Offcanvas } from './Offcanvas'
import BtnMenu from '/MeusProjetos/rafael-figueiredo-alves.github.io/src/assets/Menu.png'

export const NavBar = () => {
    
    return (
        <>
        <nav className="navbar d-inline d-md-none py-3 fixed-top" style={{ backgroundColor: '#336699', color: 'white', position: 'absolute', backgroundBlendMode: 'normal', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 1px 10px rgba(0,0,0,0.12),0px 4px 5px rgba(0,0,0,0.14)'  }}>
        <div className="container-fluid align-middle justify-content-between">
          <img src={BtnMenu} alt='Botão de Menu/Menu button' data-bs-toggle="offcanvas" data-bs-target="#SidebarOffcanvas" aria-controls="offcanvasExample" />
          <span className="navbar-brand mb-0 h5 text-center" style={{color: 'white'}}>Rafael de Figueiredo Alves</span>
          <LanguageButton />
        </div>
      </nav>
      <Offcanvas />
</>
    )
}