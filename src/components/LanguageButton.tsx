import '/src/components/LanguageButton.css'
import { useContext } from 'react'
import BtnEnglish from '/MeusProjetos/rafael-figueiredo-alves.github.io/src/assets/BtnEnglish.svg'
import BtnPortugues from '/MeusProjetos/rafael-figueiredo-alves.github.io/src/assets/BtnPortugues.svg'
import { LanguageContext } from '../contexts/LanguageContext'

export const LanguageButton = () => {
    const {CurrentLanguage, ChangeLanguage} = useContext(LanguageContext);

    function GetButton()
    {
        if (CurrentLanguage == "pt-BR")
        {
            return BtnEnglish;
        }
        else
        {
            return BtnPortugues;
        }
    }

    return <img src={GetButton()} className='LanguageButtonStyle'
                                  onClick={() => ChangeLanguage()} 
                                  alt='Troca idioma/Change Language' />
}