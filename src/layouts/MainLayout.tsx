import './MainLayout.css'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { LanguageButton } from '../components/LanguageButton'
import { Sidebar } from '../components/Sidebar'
import { MyFooter } from '../components/MyFooter'

function MainLayout() {

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
                <div className='container-fluid justify-content-end mt-3 text-end'>
                  <LanguageButton />
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