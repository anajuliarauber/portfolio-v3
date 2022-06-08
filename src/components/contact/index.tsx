import { FormEvent, useRef, useState } from "react";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import "./styles.css";
import emailjs from "@emailjs/browser";


export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isEmailSent, setIsEmailSent] = useState(false)

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();


        if (formRef && formRef.current) {
            emailjs.sendForm("portfolio", "template_vir4db1", formRef.current, "CPkSKIWF-tnVd6rlh")
                .then((result) => {
                    console.log(result.text);
                    setIsEmailSent(true);
                }, (error) => {
                    console.log(error.text)
                })
            console.log(formRef, formRef.current)
        }
    }



    return (
        <div id="contact" className="contact">
            <div className="contact-left">
                <div className="contact-title">Entre em contato comigo</div>
                <div className="contact-info">
                    <div className="contact-info-item">
                        <a className="contact-info-item-wrapper" href="https://www.github.com/anajuliarauber/">
                            <GithubIcon />
                            <p>anajuliarauber</p>
                        </a>
                        <div className="contact-info-item-wrapper">
                            <MailIcon />
                            <p>anajuliarauber@hotmail.com</p>
                        </div>
                        <a className="contact-info-item-wrapper" href="https://www.linkedin.com/in/ana-julia-rauber-784273150/">
                            <LinkedinIcon />
                            <p>Ana Julia Rauber</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <p className="contact-description">
                    Quer conversar sobre um projeto? Tem uma proposta? Me mande uma mensagem!
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nome" name="user_name"  />
                    <input type="text" placeholder="Assunto" name="user_subject" />
                    <input type="text" placeholder="Seu email" name="user_email" />
                    <textarea placeholder="Mensagem" name="message" cols={30} rows={5}></textarea>
                    <button type="submit">Enviar</button>
                    {isEmailSent && <p>Mensagem enviada</p>}
                </form>
            </div>
        </div>
    )
}