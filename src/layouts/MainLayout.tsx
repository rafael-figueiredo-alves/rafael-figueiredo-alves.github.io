
import Logo from '/logo.png'

import './MainLayout.css'
import CountButton from '../components/CountButton'
import { Link, Outlet } from 'react-router-dom'

function MainLayout() {

  return (
    <>
      <div>
        <a href="https://github.com/rafael-figueiredo-alves" target="_blank">
          <img src={Logo} className="logo" alt="LogoRafael" />
        </a>
      </div>
      <h1>Portfólio "Rafael de Figueiredo Alves"</h1>
      <div className="card">
        <CountButton Inicio={10} />
        <p>
          Edite <code>src/App.tsx</code> e salve para testar HMR
        </p>
      </div>
      <p>
        Página em construção...
        <Link to="/contacts">Contatos</Link>
        <Outlet />
      </p>
    </>
  )
}

export default MainLayout