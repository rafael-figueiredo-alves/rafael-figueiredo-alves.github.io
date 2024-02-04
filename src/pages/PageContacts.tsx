import PageContactsImg from '/src/assets/PageContactsTitle.png'
import { PageTitle } from '../components/PageTitle'
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';

const PageContacts = () => {
    const {Translate} = useContext(LanguageContext);

    return (
        <>
        <PageTitle Image={PageContactsImg}>{Translate("Contacts.Titulo", false)}</PageTitle>
        </>
    )
}

export default PageContacts