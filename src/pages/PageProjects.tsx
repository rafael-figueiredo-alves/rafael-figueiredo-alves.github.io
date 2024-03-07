import { useContext, useEffect, useState } from 'react'
import PageProjectsImg from '/src/assets/PageTitleImg/PageProjectsImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { GetDataFromJSONService } from '../services/GetDataFromJSONService'
import { ProjectCard } from '../components/Shared/ProjectCard'
import { PageTitleContext, Pages } from '../contexts/PageTitleContext'
import { Projects } from '../models/Interfaces'

const PageProjects = () => {
    const {CurrentLanguage, Translate} = useContext(LanguageContext)
    const [projects, setProjects] = useState<Projects[]>([])
    const [indice, setIndice] = useState<number>(0);
    const { ChangePage } = useContext(PageTitleContext)

    useEffect(() => ChangePage(Pages.Projects), [])

    useEffect(() => { GetDataFromJSONService<Projects>('Projects', CurrentLanguage).then(data => setProjects(() => data)) }, [CurrentLanguage])

    const Anterior = () => {
        if(indice > 0) {
            setIndice(indice - 1);
        }
    }

    const Proximo = () => {
        if(indice < projects.length-1){
            setIndice(indice + 1);
        }
    }

    return(
        <>
        <div className='d-md-none'>
        <PageTitle Image={PageProjectsImg}>{Translate("Projects.Titulo", false)}</PageTitle>
        </div>

        {projects.length > 0 ? () => {
            return <ProjectCard Project={projects} Indice={indice} BtnAnteriorClick={Anterior} BtnProximoClick={Proximo}/>
        } : <p>Não foram encontrados Projetos</p>}
        </>        
    )
}

export default PageProjects