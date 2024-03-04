import './MainLayout.css'
import PageToolsImg from '/src/assets/PageTitleImg/PageToolsImg.png'
import PageAboutImg from '/src/assets/PageTitleImg/PageAboutImg.png'
import PageContactsImg from '/src/assets/PageTitleImg/PageContactsTitle.png'
import PageExperienceImg from '/src/assets/PageTitleImg/PageExperienceImg.png'
import PageProjectsImg from '/src/assets/PageTitleImg/PageProjectsImg.png'
import PageLanguagesImg from '/src/assets/PageTitleImg/PageLanguagesImg.png'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar_SideBar/NavBar'
import { LanguageButton } from '../components/LanguageButton/LanguageButton'
import { Sidebar } from '../components/NavBar_SideBar/Sidebar'
import { MyFooter } from '../components/MyFooter'
import { useContext } from 'react'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { LanguageContext } from '../contexts/LanguageContext'

function MainLayout() {
  const { CurrentPage } = useContext(PageTitleContext)
  const { Translate } = useContext(LanguageContext)

  function Teste(){
    switch (CurrentPage){
      case Pages.Home:
        return "";
      case Pages.Tools:
        return <PageTitle Image={PageToolsImg}>{Translate("Tools.Titulo", false)}</PageTitle> 
      case Pages.About:
        return <PageTitle Image={PageAboutImg}>{Translate("About.Titulo", false)}</PageTitle>
      case Pages.Contatcs:
        return <PageTitle Image={PageContactsImg}>{Translate("Contacts.Titulo", false)}</PageTitle>
      case Pages.Experience:
        return <PageTitle Image={PageExperienceImg}>{Translate("Experience.Titulo", false)}</PageTitle>
      case Pages.LanguagesFrameworks:
        return <PageTitle Image={PageLanguagesImg}>{Translate("Languages.Titulo", false)}</PageTitle>
      case Pages.Projects:
        return <PageTitle Image={PageProjectsImg}>{Translate("Projects.Titulo", false)}</PageTitle>
    }
  }

  return (
    <>
      <div className="container-fluid overflow-hidden">
        <div className="row vh-100 overflow-auto">
          <div className="d-none d-md-table-cell col-md-5 col-lg-4 col-xl-3 px-sm-2 px-0 d-flex sticky-top row-height" style={{ backgroundColor: '#336699' }}>
            <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white row-height">
              <div className='container-fluid d-none d-md-inline'>
                <Sidebar />
              </div>
            </div>
          </div>
          
          {/* Conteúdo principal da página */}
          <div className="col d-flex flex-column h-sm-100">
              {/* Barra com botão de idioma quando tela maior que 768px */}
              <div className='col-12 d-none d-md-inline'>
                <div className='row container-fluid'>
                <div className='col-10 justify-content-start mt-3 text-start'>
                  {Teste()}
                </div>
                <div className='col-2 justify-content-end mt-3 text-end'>
                  <LanguageButton />
                </div>
                </div>
              </div>            
            <main className="row overflow-auto">
              
              <NavBar />

              {/* Elemento para dar espaçamento entre a navbar e o conteúdo*/}
              <div className='col-12 d-inline d-md-none mt-3' style={{height: 50}} />

              {/* Conteúdo da página Renderizada*/}
              <div className="col-12 pt-4">               
                <Outlet />
              </div>

            </main>

            <MyFooter />

          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout