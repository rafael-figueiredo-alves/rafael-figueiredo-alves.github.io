import { useContext, useEffect, useState } from 'react'
import PageAboutImg from '/src/assets/PageAboutImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/PageTitle'
import { GetDataFromJSONService } from '../services/GetDataFromJSONService'
import { iProjects } from '../models/ProjectsModel'

const PageAbout = () => {
    const { CurrentLanguage, Translate } = useContext(LanguageContext)
    const [projects, setProjects] = useState<iProjects[]>([])

    useEffect(() => { GetDataFromJSONService<iProjects>('projects', CurrentLanguage).then(data => setProjects(() => data)) }, [CurrentLanguage])

    return (
        <>
            <PageTitle Image={PageAboutImg}>{Translate("About.Titulo", false)}</PageTitle>
            <ul>
                {projects.map((project, index) => (
                    <ProjectForm data={project} num={index} />
                ))}
            </ul>
        </>
    )
}

const ProjectForm = ({ data, num }: { data: iProjects, num: number }) => {
    return (
        <li key={num}>
            <p>- {data.Title}</p>
            <p>- {data.Version}</p>
            <p>- {data.Description}</p>
        </li>
    )
}

export default PageAbout