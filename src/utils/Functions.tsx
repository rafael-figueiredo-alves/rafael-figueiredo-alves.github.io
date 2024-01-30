export function RenderHTML(HTML: string){
    return <div dangerouslySetInnerHTML={{ __html: HTML}} />
}