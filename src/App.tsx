
import Logo from '/logo.png'

import './App.css'
import CountButton from './components/CountButton'

function App() {

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
      </p>
    </>
  )
}

export default App
