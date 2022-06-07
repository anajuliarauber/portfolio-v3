import "./styles.css";
const aboutImage = require("../../assets/computer.jpg")

export function About() {
    return (
        <div id="about" className="about">
            <div className="about-left">
                <div className="about-card"></div>
                <img src={aboutImage} alt="about" className="about-image" />
            </div>
            <div className="about-right">
                <h1 className="about-title">Sobre mim</h1>
                <p className="about-sub">Desenvolvedora web</p>
                <p className="about-description">Me chamo Ana Julia, tenho 24 anos e me apaixonei por programação no final de 2021. Desde então, venho
                    me dedicando a aprender novas ferramentas e tecnologias para me tornar uma desenvolvedora web. Sou
                    uma pessoa dedicada, que gosta de aprender coisas novas e que corre atras do que precisa.</p>
                <div className="techs">
                    <h2 className="tech">Tecnologias</h2>
                    <ul className="tech-list">
                        <li className="tech-item">HTML</li>
                        <li className="tech-item">CSS</li>
                        <li className="tech-item">JavaScript</li>
                        <li className="tech-item">Typescript</li>
                        <li className="tech-item">React JS</li>
                        <li className="tech-item">Node JS</li>
                        <li className="tech-item">PostgreSQL</li>
                        <li className="tech-item">Mongodb</li>
                        <li className="tech-item">Express</li>
                        <li className="tech-item">API REST</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}