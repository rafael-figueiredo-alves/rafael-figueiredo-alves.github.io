import { useState } from 'react'
import BtnEnglish from '/MeusProjetos/rafael-figueiredo-alves.github.io/src/assets/BtnEnglish.svg'
import BtnPortugues from '/MeusProjetos/rafael-figueiredo-alves.github.io/src/assets/BtnPortugues.svg'

export const LanguageButton = () => {
    const [Idioma, setIdioma] = useState("EN");

    function ChangeLanguage()
    {
        if (Idioma == "EN")
        {
            setIdioma(() => "PT");
        }
        else
        {
            setIdioma(() => "EN");
        }
    }

    function GetButton()
    {
        if (Idioma == "EN")
        {
            return BtnEnglish;
        }
        else
        {
            return BtnPortugues;
        }
    }

    return <img src={GetButton()} style={{cursor: 'pointer'}} onClick={() => ChangeLanguage()} alt='Troca idioma/Change Language' />
}