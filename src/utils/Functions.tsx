//Esta função retorna um componente que pode renderizar HTML diretamente de uma string
export function RenderHTML(HTML: string){
    return <div dangerouslySetInnerHTML={{ __html: HTML}} />
}