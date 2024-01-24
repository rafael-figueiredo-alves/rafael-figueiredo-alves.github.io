import Avatar from '/src/assets/Avatar.png'
import Linkedin from '/src/assets/Linkedin.png'
import Youtube from '/src/assets/Youtube.png'
import Github from '/src/assets/Github.png'
import GMail from '/src/assets/GMail.png'

export const Sidebar = () => {
    return (
    <>
    <div className="container-fluid text-center mt-5">
        <img src={Avatar} width={150} height={150} alt='Avatar' />
    </div>
    <p className='container-fluid text-center mt-3' style={{ color: 'white', fontFamily: 'Comic Sans MS', fontSize: 20, fontWeight: 700}}>Rafael de Figueiredo Alves</p>
    <div className='container-fluid ms-3 mt-3'>
        <a href='https://www.linkedin.com/in/rafael-de-figueiredo-alves/' className='align-middle' target='_blank' style={{fontFamily: 'Arial',fontSize: 16, fontWeight: 400, color: 'white',textDecoration: 'none'}} data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas"><img src={Linkedin} width={32} height={32} />/in/rafael-figueiredo-alves</a>
    </div>
    <div className='container-fluid ms-3'>
        <a href='https://www.youtube.com/@programacao4all' className='align-middle' target='_blank' style={{fontFamily: 'Arial',fontSize: 16, fontWeight: 400, color: 'white',textDecoration: 'none'}} data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas"><img src={Youtube} width={32} height={32} />@programacao4all</a>
    </div>
    <div className='container-fluid ms-3'>
        <a href='https://github.com/rafael-figueiredo-alves' target='_blank' className='align-middle' style={{fontFamily: 'Arial',fontSize: 16, fontWeight: 400, color: 'white',textDecoration: 'none'}} data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas"><img src={Github} width={32} height={32} />/rafael-figueiredo-alves</a>
    </div>
    <div className='container-fluid ms-3'>
        <a href='mailto://devpegasus@outlook.com' target='_blank' className='align-middle' style={{fontFamily: 'Arial',fontSize: 16, fontWeight: 400, color: 'white',textDecoration: 'none'}} data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas"><img src={GMail} width={32} height={32} />devpegasus@outlook.com</a>
    </div>
    <button data-bs-dismiss="offcanvas" data-bs-target="#SidebarOffcanvas">Teste</button>
    </>
    )
}