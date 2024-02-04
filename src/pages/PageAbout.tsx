import { useContext, useEffect, useState } from 'react'
import PageAboutImg from '/src/assets/PageAboutImg.png'
import { LanguageContext } from '../contexts/LanguageContext'
import { PageTitle } from '../components/PageTitle'
import { GetDataFromJSONService } from '../services/GetDataFromJSONService'
import { iProjects } from '../models/ProjectsModel'
import { Chip } from '../components/Chip/Chip'

const PageAbout = () => {
    const { CurrentLanguage, Translate } = useContext(LanguageContext)
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

    return (
        <>
            <PageTitle Image={PageAboutImg}>{Translate("About.Titulo", false)}</PageTitle>
{/*             <ul>
                {projects.map((project, index) => (
                    <ProjectForm data={project} num={index} />
                ))}
            </ul> */}
            <button  className='btn btn-primary' onClick={Anterior} disabled={indice == 0}>Anterior</button>
            <button  className='btn btn-primary' onClick={Proximo} disabled={indice == projects.length-1}>Próximo</button>
            {projects.length > 0 && (
                <ProjectForm2 data={projects[indice]} />
            )}

        </>
    )
}

const ProjectForm2 = ({ data }: { data: iProjects }) => {
    return (
        <>
            <p>- {data.Title}</p>
            <p>- {data.Version}</p>
            <p>- {data.Description}</p>
            <Chip Kind={data.Chip} />
            </>
    )
}

export default PageAbout