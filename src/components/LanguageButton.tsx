import '/src/components/LanguageButton.css'
import { useEffect, useState } from 'react'
import BtnEnglish from '/MeusProjetos/rafael-figueiredo-alves.github.io/src/assets/BtnEnglish.svg'
import BtnPortugues from '/MeusProjetos/rafael-figueiredo-alves.github.io/src/assets/BtnPortugues.svg'
import { ChangeLanguage, currentLanguage } from '../contexts/LanguageContext'

export const LanguageButton = () => {
    const [Idioma, setIdioma] = useState(currentLanguage);

    useEffect(() => ChangeLanguage(Idioma), [Idioma])

    function Change()
    {
        if (Idioma == "pt-BR")
        {
            setIdioma(() => "en");
        }
        else
        {
            setIdioma(() => "pt-BR");
        }
    }

    function GetButton()
    {
        if (Idioma == "pt-BR")
        {
            return BtnPortugues;
        }
        else
        {
            return BtnEnglish;
        }
    }

    return <img src={GetButton()} className='LanguageButtonStyle'
                                  onClick={() => Change()} 
                                  alt='Troca idioma/Change Language' />
}