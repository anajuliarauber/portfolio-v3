import { FormEvent, FormEventHandler, useRef } from "react";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import "./styles.css";


export function Contact() {
    const formRef = useRef(null);

    function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    return (
        <div id="contact" className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <div className="contact-title">Entre em contato comigo</div>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <a className="contact-info-item-wrapper" href="https://www.github.com/anajuliarauber/">
                                <GithubIcon />
                                <p>github.com/anajuliarauber/</p>
                            </a>
                            <div className="contact-info-item-wrapper">
                                <MailIcon />
                                <p>anajuliarauber@hotmail.com</p>
                            </div>
                            <a className="contact-info-item-wrapper" href="https://www.linkedin.com/in/ana-julia-rauber-784273150/">
                                <LinkedinIcon />
                                <p>linkedin.com/in/ana-julia-rauber-784273150/</p>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="contact-right">
                    <p className="contact-description">
                        Quer conversar sobre um projeto? Tem uma proposta? Estou sempre disponível para trocar ideias
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nome" name="user_name" />
                        <input type="text" placeholder="Assunto" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea placeholder="Mensagem" name="message" cols={30} rows={5}></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}