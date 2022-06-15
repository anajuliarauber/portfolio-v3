import { ThemeSwitcher } from "../themeSwitcher"
import "./styles.css"

export function Navbar() {
    return (
        <nav>
            <div className="nav-right">
                <a href="#intro">Inicio</a>
            </div>
            <ul className="nav-left">
                <li><a href="#about">Sobre</a></li>
                {/* <li><a href="#projects">Portfolio</a></li> */}
                <li> <a href="#contact">Contato</a></li>
                {/* <li><ThemeSwitcher/></li> */}
            </ul>

        </nav>
    )
}