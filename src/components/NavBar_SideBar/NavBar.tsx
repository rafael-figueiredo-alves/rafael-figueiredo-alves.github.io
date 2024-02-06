import '/src/components/NavBar_SideBar/NavBar.css'
import { LanguageButton } from '../LanguageButton/LanguageButton'
import { Offcanvas } from './Offcanvas'
import BtnMenu from '/MeusProjetos/rafael-figueiredo-alves.github.io/src/assets/Menu.png'

export const NavBar = () => {
    
    return (
        <>
        <nav className="navbar d-inline d-md-none py-3 fixed-top NavBarSettings">
        <div className="container-fluid align-middle justify-content-between">
          <img src={BtnMenu} alt='Botão de Menu/Menu button' data-bs-toggle="offcanvas" data-bs-target="#SidebarOffcanvas" aria-controls="offcanvasExample" />
          <span className="navbar-brand mb-0 h5 text-center NavBarTextTitle">Rafael de Figueiredo Alves</span>
          <LanguageButton />
        </div>
      </nav>
      <Offcanvas />
</>
    )
}