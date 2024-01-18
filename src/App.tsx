import { useState } from 'react'
import Logo from '/logo.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/rafael-figueiredo-alves" target="_blank">
          <img src={Logo} className="logo" alt="LogoRafael" />
        </a>
      </div>
      <h1>Portfólio "Rafael de Figueiredo Alves"</h1>
      <div className="card">
        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
          Contando ... {count}
        </button>
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
