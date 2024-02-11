import { useContext, useEffect, useState } from 'react'
import PageProjectsImg from '/src/assets/PageProjectsImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/Shared/PageTitle'
import { iProjects } from '../models/Interfaces'
import { GetDataFromJSONService } from '../services/GetDataFromJSONService'
import { ProjectCard } from '../components/Shared/ProjectCard'

const PageProjects = () => {
    const {CurrentLanguage, Translate} = useContext(LanguageContext)
    const [projects, setProjects] = useState<iProjects[]>([])
    const [indice, setIndice] = useState<number>(0);

    useEffect(() => { GetDataFromJSONService<iProjects>('projects', CurrentLanguage).then(data => setProjects(() => data)) }, [CurrentLanguage])

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
        <PageTitle Image={PageProjectsImg}>{Translate("Projects.Titulo", false)}</PageTitle>

        {projects.length > 0 && (
            <ProjectCard Project={projects} Indice={indice} BtnAnteriorClick={Anterior} BtnProximoClick={Proximo}/>
        )}
        </>        
    )
}

export default PageProjects