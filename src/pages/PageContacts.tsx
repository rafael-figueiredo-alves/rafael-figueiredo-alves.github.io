import '/src/pages/PagesStyles.css'
import PageContactsImg from '/src/assets/PageContactsTitle.png'
import { PageTitle } from '../components/PageTitle'
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';
import { Chip, ChipKind } from '../components/Chip/Chip';

const PageContacts = () => {
    const {Translate} = useContext(LanguageContext);

    return (
        <>
        <PageTitle Image={PageContactsImg}>{Translate("Contacts.Titulo", false)}</PageTitle>
        </>
    )
}

export default PageContacts