import '/src/components/LanguageButton/LanguageButton.css'
import { useContext } from 'react'
import BtnEnglish from '/MeusProjetos/rafael-figueiredo-alves.github.io/src/assets/UI/BtnEnglish.svg'
import BtnPortugues from '/MeusProjetos/rafael-figueiredo-alves.github.io/src/assets/UI/BtnPortugues.svg'
import { LanguageContext } from '../../contexts/LanguageContext'

export const LanguageButton = () => {
    const {CurrentLanguage, ChangeLanguage, Translate} = useContext(LanguageContext);

    function GetButton(): string
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
                                  alt={Translate("LanguageBtn.Tip", false)}
                                  data-bs-toggle="tooltip" data-bs-placement="bottom" 
                                  title={Translate("LanguageBtn.Tip", false)} />
}