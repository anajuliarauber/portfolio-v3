import "./styles.css";
const profilePicture = require( "../../assets/profile.png");

export function Intro() {
    return (
        <div id ="intro" className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-name-1">Olá, meu nome é</h2>
                    <h1 className="intro-name-2">Ana Julia Rauber</h1>
                    <div className="intro-title" >
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Desenvolvedora web</div>
                            <div className="intro-title-item">Dev front-end</div>
                            <div className="intro-title-item">Dev back-end</div>
                            <div className="intro-title-item">Dev full-stack</div>
                        </div>
                    </div>
                    <div className="intro-description">
                        Busco uma oportunidade como desenvolvedora júnior para adquirir conhecimentos e melhorar minhas habilidades.
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
                <img src={profilePicture} alt="ana" className="intro-image" />
            </div>
        </div>
    )
}