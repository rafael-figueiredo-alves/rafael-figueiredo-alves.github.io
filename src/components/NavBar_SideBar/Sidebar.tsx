//Arquivo de Estilos CSS
import '/src/components/NavBar_SideBar/Sidebar.css'

//Imagens usadas na Sidebar
import Avatar from '/src/assets/UI/Avatar.png'
import Linkedin from '/src/assets/UI/Linkedin.png'
import Youtube from '/src/assets/UI/Youtube.png'
import Github from '/src/assets/UI/Github.png'
import GMail from '/src/assets/UI/GMail.png'
import Menu from '/src/assets/UI/Menu_2.png'
import HomeImg from '/src/assets/UI/Home.png'
import AboutImg from '/src/assets/UI/About.png'
import LanguagesImg from '/src/assets/UI/Languages.png'
import ToolsImg from '/src/assets/UI/Tools.png'
import ExperienceImg from '/src/assets/UI/Experience.png'
import ContactsImg from '/src/assets/UI/Contacts.png'

//Importações de Biblioteca
import { NavLink, useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import { LanguageContext } from '../../contexts/LanguageContext'

//Código principal do componente
export const Sidebar = () => {
    const {Translate} = useContext(LanguageContext)

    const Navigate = useNavigate();

    function GetCSSClass(Ativo: boolean): string {
        let CSSClass: string = "ItensMenu ";
        if (Ativo) {
            CSSClass = CSSClass + "Ativo";
        }
        else {
            CSSClass = CSSClass + "Inativo";
        }
        return CSSClass;
    }

    return (
        <>
            {/* Minha foto */}
            <div className="container-fluid text-center mt-3">
                <img src={Avatar} width={150} height={150} alt='Avatar' />
            </div>

            {/*Meu nome */}
            <p className='container-fluid text-center mt-3 MeuNome'>Rafael de Figueiredo Alves</p>

            {/* Links para as redes sociais e email */}
            <div className='container-fluid ms-3 mt-3'>
                <a href='https://www.linkedin.com/in/rafael-de-figueiredo-alves/' className='align-middle LinksRedesSociais' 
                  data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas" 
                  onClick={() => window.open('https://www.linkedin.com/in/rafael-de-figueiredo-alves/', '_blank')}>
                    <img className='ImgRedesSociais' src={Linkedin} width={24} height={24} alt="linkedin" />
                    /in/rafael-figueiredo-alves
                </a>
            </div>

            <div className='container-fluid ms-3'>
                <a href='https://www.youtube.com/@programacao4all' className='align-middle LinksRedesSociais' 
                  data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas" 
                  onClick={() => window.open('https://www.youtube.com/@programacao4all', '_blank')}>
                    <img className='ImgRedesSociais' src={Youtube} width={24} height={24} alt="youtube" />
                    @programacao4all
                </a>
            </div>

            <div className='container-fluid ms-3'>
                <a href='https://github.com/rafael-figueiredo-alves' className='align-middle LinksRedesSociais' 
                  data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas" 
                  onClick={() => window.open('https://github.com/rafael-figueiredo-alves', '_blank')}>
                    <img className='ImgRedesSociais' src={Github} width={24} height={24} alt="github" />
                    /rafael-figueiredo-alves
                </a>
            </div>

            <div className='container-fluid ms-3'>
                <a href='mailto://devpegasus@outlook.com' className='align-middle LinksRedesSociais' 
                  data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas" 
                  onClick={() => window.open('mailto://devpegasus@outlook.com', '_blank')}>
                    <img className='ImgRedesSociais' src={GMail} width={24} height={24} alt="email" />
                    devpegasus@outlook.com
                </a>
            </div>

            {/*Barra divisória */}
            <div className='container-fluid LinhaHorizontal' />

            {/* Menu */}
            <p className='container-fluid mt-1 MenuTitle'>
                <img src={Menu} className='ImgMenu' width={24} height={24} alt='menu' />
                MENU
            </p>

            <div className='container-fluid mt-1'>
                <NavLink to="/" onClick={() => Navigate("/")} className={({ isActive }) => GetCSSClass(isActive)} 
                         data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas">
                            <img src={HomeImg} className='SettingsIcon' width={24} height={24} alt='Home' />
                             {Translate("Menu.Inicio", false)}
                </NavLink>
            </div>
            <div className='container-fluid mt-2'>
                <NavLink to="/about" onClick={() => Navigate("/about")} className={({ isActive }) => GetCSSClass(isActive)} 
                         data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas">
                            <img src={AboutImg} className='SettingsIcon' width={24} height={24} alt='About' />
                            {Translate("Menu.Sobre", false)}
                </NavLink>
            </div>
            <div className='container-fluid mt-2'>
                <NavLink to="/languagesandframworks" onClick={() => Navigate("/languagesandframworks")} className={({ isActive }) => GetCSSClass(isActive)} 
                         data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas">
                            <img src={LanguagesImg} className='SettingsIcon' width={24} height={24} alt='Languages' />
                            {Translate("Menu.Linguagens", false)}
                </NavLink>
            </div>
            <div className='container-fluid mt-2'>
                <NavLink to="/tools" onClick={() => Navigate("/tools")} className={({ isActive }) => GetCSSClass(isActive)} 
                         data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas">
                            <img src={ToolsImg} className='SettingsIcon' width={24} height={24} alt='Tools' />
                            {Translate("Menu.Ferramentas", false)}
                </NavLink>
            </div>
            <div className='container-fluid mt-2'>
                <NavLink to="/experience" onClick={() => Navigate("/experience")} className={({ isActive }) => GetCSSClass(isActive)} 
                         data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas">
                            <img src={ExperienceImg} className='SettingsIcon' width={24} height={24} alt='Experience' />
                            {Translate("Menu.Experiencia", false)}
                </NavLink>
            </div>
            <div className='container-fluid mt-2'>
                <NavLink to="/projects" onClick={() => Navigate("/projects")} className={({ isActive }) => GetCSSClass(isActive)} 
                         data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas">
                            <img src={Github} className='SettingsIcon' width={24} height={24} alt='Projetos' />
                            {Translate("Menu.Projetos", false)}
                </NavLink>
            </div>
            <div className='container-fluid mt-2'>
                <NavLink to="/contacts" onClick={() => Navigate("/contacts")} className={({ isActive }) => GetCSSClass(isActive)} 
                         data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas">
                            <img src={ContactsImg} className='SettingsIcon' width={24} height={24} alt='Contatos' />
                            {Translate("Menu.Contato", false)}
                </NavLink>
            </div>        
    </>
    )
}