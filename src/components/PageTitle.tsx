import '/src/components/PageTitle.css'

export const PageTitle = (props : any) => {
    return <h1 className="TituloPagina"><img className='TituloPaginaImg' src={props.Image} width={32} height={32} />{props.children}</h1>
}