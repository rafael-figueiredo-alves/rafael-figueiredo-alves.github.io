import '/src/components/Sidebar.css'
import Avatar from '/src/assets/Avatar.png'
import Linkedin from '/src/assets/Linkedin.png'
import Youtube from '/src/assets/Youtube.png'
import Github from '/src/assets/Github.png'
import GMail from '/src/assets/GMail.png'
import Menu from '/src/assets/Menu_2.png'
import HomeImg from '/src/assets/Home.png'
import AboutImg from '/src/assets/About.png'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {

    function GetCSSClass(Ativo: boolean): string
    {
        let CSSClass: string = "container-fluid mt-1";
        if(Ativo)
        {
            CSSClass = CSSClass + " Ativo"; 
        }
        else
        {
            CSSClass = CSSClass;
        }
        return CSSClass;
    }

    return (
    <>
    <div className="container-fluid text-center mt-5">
        <img src={Avatar} width={150} height={150} alt='Avatar' />
    </div>
    <p className='container-fluid text-center mt-3' style={{ color: 'white', fontFamily: 'Comic Sans MS', fontSize: 20, fontWeight: 700}}>Rafael de Figueiredo Alves</p>
    <div className='container-fluid ms-3 mt-3'>
        <a href='https://www.linkedin.com/in/rafael-de-figueiredo-alves/' className='align-middle' style={{fontFamily: 'Arial',fontSize: 16, fontWeight: 400, color: 'white',textDecoration: 'none'}} data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas" onClick={() => window.open('https://www.linkedin.com/in/rafael-de-figueiredo-alves/', '_blank')}><img src={Linkedin} width={32} height={32} />/in/rafael-figueiredo-alves</a>
    </div>
    <div className='container-fluid ms-3'>
        <a href='https://www.youtube.com/@programacao4all' className='align-middle' target='_blank' style={{fontFamily: 'Arial',fontSize: 16, fontWeight: 400, color: 'white',textDecoration: 'none'}} data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas" onClick={() => window.open('https://www.youtube.com/@programacao4all', '_blank')}><img src={Youtube} width={32} height={32} />@programacao4all</a>
    </div>
    <div className='container-fluid ms-3'>
        <a href='https://github.com/rafael-figueiredo-alves' target='_blank' className='align-middle' style={{fontFamily: 'Arial',fontSize: 16, fontWeight: 400, color: 'white',textDecoration: 'none'}} data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas" onClick={() => window.open('https://github.com/rafael-figueiredo-alves', '_blank')}><img src={Github} width={32} height={32} />/rafael-figueiredo-alves</a>
    </div>
    <div className='container-fluid ms-3'>
        <a href='mailto://devpegasus@outlook.com' target='_blank' className='align-middle' style={{fontFamily: 'Arial',fontSize: 16, fontWeight: 400, color: 'white',textDecoration: 'none'}} data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas" onClick={() => window.open('mailto://devpegasus@outlook.com', '_blank')}><img src={GMail} width={32} height={32} />devpegasus@outlook.com</a>
    </div>

    <div className='container-fluid' style={{height: 10, borderBottom: 'solid 1px white', marginLeft: 0, marginRight: 20}} />
    
    <p className='container-fluid mt-1' style={{fontFamily: 'Arial',fontSize: 24,fontWeight: 700, color: 'white', marginLeft: -5, marginBottom: 0}}><img src={Menu} style={{marginTop: -5}} width={32} height={32} alt='menu' />MENU</p>

    <NavLink to="/" className={({ isActive }) => GetCSSClass(isActive)} style={{fontFamily: 'Roboto',fontSize: 20,fontWeight: 700, color: 'white', textDecoration: 'none', height: 32}}><img src={HomeImg} style={{marginTop: -5}} width={32} height={32} alt='menu' /> Inicio</NavLink>
    <br />
    <NavLink to="/about" className={({ isActive }) => GetCSSClass(isActive)} style={{fontFamily: 'Roboto',fontSize: 20,fontWeight: 700, color: 'white', textDecoration: 'none', height: 32}}><img src={AboutImg} style={{marginTop: -5}} width={32} height={32} alt='menu' /> Sobre mim</NavLink>
    </>
    )
}