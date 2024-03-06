import '/src/pages/PageContacts.css'
import PageContactsImg from '/src/assets/PageTitleImg/PageContactsTitle.png'
import { PageTitle } from '../components/Shared/PageTitle'
import { LanguageContext } from '../contexts/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import { PageTitleContext, Pages } from '../contexts/PageTitleContext';
import { ContactMessage } from '../models/Interfaces';
import { SendDataToJSONService } from '../services/SendDataToJSONService';
import { Modal } from '../components/Shared/Modal';

const PageContacts = () => {
    const { Translate } = useContext(LanguageContext);
    const { ChangePage } = useContext(PageTitleContext);

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Message, setMessage] = useState('');

    const ChangeName = (e: any) => {
        setName(() => e.target.value);
    }

    const ChangeEmail = (e: any) => {
        setEmail(() => e.target.value);
    }

    const ChangeMessage = (e: any) => {
        setMessage(() => e.target.value);
    }

    const OnSubmit = (e: any) => {
        e.preventDefault();
        let msg: ContactMessage = {
            Name: Name,
            Email: Email,
            Message: Message,
            DataHora: new Date(Date.now())
        };
        SendDataToJSONService(msg);
        setShow(() => true);
    }

    const [show, setShow] = useState(false);

    const onClose = () => {
        setShow(() => false)
        ClearFields();
    }

    const ClearFields = () => {
        setName(() => "");
        setEmail(() => "");
        setMessage(() => "");
    }

    useEffect(() => ChangePage(Pages.Contatcs), []);

    return (
        <>
            <div className='d-md-none'>
                <PageTitle Image={PageContactsImg}>{Translate("Contacts.Titulo", false)}</PageTitle>
            </div>
            <div className="container px-2 my-2">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-0 rounded-3 shadow-lg">
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <div className="h1 fw-light">{Translate("Contacts.FormTitle", false)}</div>
                                    <p className="mb-4 text-muted">{Translate("Contacts.Message", false)}</p>
                                </div>

                                <form id="contactForm" onSubmit={OnSubmit}>

                                    <div className="form-floating mb-3">
                                        <input autoFocus className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" value={Name} onChange={ChangeName} />
                                        <label form="name">{Translate("Contacts.Name", false)}</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" value={Email} onChange={ChangeEmail} />
                                        <label form="emailAddress">{Translate("Contacts.Email", false)}</label>
                                        <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" placeholder="Message" style={{ height: "10rem" }} data-sb-validations="required" value={Message} onChange={ChangeMessage}></textarea>
                                        <label form="message">{Translate("Contacts.Msg", false)}</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
                                    </div>


                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            <p>To activate this form, sign up at</p>
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>

                                    <div className="d-none" id="submitErrorMessage">
                                        <div className="text-center text-danger mb-3">Error sending message!</div>
                                    </div>

                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg" id="submitButton" type="submit">{Translate("Contacts.Button", false)}</button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} Message={Translate("Contacts.MsgBody", false)} Title={Translate("Contacts.MsgTitle", false)} onClose={onClose} />

        </>
    )
}

export default PageContacts