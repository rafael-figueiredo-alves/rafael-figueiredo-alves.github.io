import '/src/pages/PagesStyles.css'
import PageContactsImg from '/src/assets/PageContactsTitle.png'
import { PageTitle } from '../components/PageTitle'
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext } from 'react';
import { Chip } from '../components/chip';
import { HorizontalList } from '../components/HorizontalList';

const PageContacts = () => {
    const {Translate} = useContext(LanguageContext);

    return (
        <>
        <PageTitle Image={PageContactsImg}>{Translate("Contacts.Titulo", false)}</PageTitle>
        <div className='card'>
            <div className='card-body'>
        <Chip Texto='Rafael Alves' />
        <Chip Texto='Jailza Alves' />
        <Chip Texto='Rafaela Alves' />
        <Chip Texto='Davi Alves' />
        <Chip Texto='Jailza Alves' />
        <Chip Texto='Rafaela Alves' />
        <Chip Texto='Davi Alves' />
        <Chip Texto='Jailza Alves' />
        <Chip Texto='Rafaela Alves' />
        <Chip Texto='Davi Alves' />
            </div>
        </div>
        <span className="badge text-bg-primary">Primary</span>
<span className="badge text-bg-secondary">Secondary</span>
<span className="badge text-bg-success">Success</span>
<span className="badge text-bg-danger">Danger</span>
<span className="badge text-bg-warning">Warning</span>
<span className="badge text-bg-info">Info</span>
<span className="badge text-bg-light">Light</span>
<span className="badge text-bg-dark">Dark</span>
        </>
    )
}

export default PageContacts