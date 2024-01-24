export const MyFooter = () => {

    function AnoAtual()
    {
        const ano = new Date();
        return ano.getFullYear();
    }

    return (
        <footer className="row bg-light py-4 mt-auto">
            <div className="col text-center"> ©{AnoAtual()} - Rafael de Figueiredo Alves </div>
        </footer>
    )
}