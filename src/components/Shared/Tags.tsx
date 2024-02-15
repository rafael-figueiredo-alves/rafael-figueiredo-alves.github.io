export const Tags = ({TagList}: {TagList: string[]}) => {
    return (
        <div className="container-fluid">
            {TagList.map((Tag: string, indice: number) => (
                <span key={indice} className="badge rounded-pill text-bg-primary me-1">{Tag}</span>
            ))}
        </div>
    )
}