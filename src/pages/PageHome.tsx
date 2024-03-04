import '/src/pages/PageHome.css'
import { useContext, useEffect } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { useNavigate } from 'react-router-dom'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'

const PageHome = () => {
  const { Translate } = useContext(LanguageContext)
  const Navigate = useNavigate()
  const { ChangePage } = useContext(PageTitleContext)

  useEffect(() => ChangePage(Pages.Home), [])

  return (
    <>
      <div className="px-4 py-3 text-center">
        <img className="d-block mx-auto mb-4" src="/logo.png" alt="My picture" width="200" height="200" />
        <h1 className="display-5 fw-bold text-body-emphasis Titulo">{Translate("Home.Titulo", false)}</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">{Translate("Home.BoasVindas", false)}</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={() => Navigate("/about")}>{Translate("Menu.Sobre", false)}</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={() => Navigate("/projects")}>{Translate("Menu.Projetos", false)}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageHome;