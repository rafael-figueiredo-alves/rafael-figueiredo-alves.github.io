const PageExperience = () => {
    function GetLanguage() : string
    {
        return window.navigator.language;
    }

    return(
        <>
        <h1>Experience</h1>
        <p>{GetLanguage()}</p>
        </>
    )
}

export default PageExperience