import { useContext, useState } from "react"
import { ThemeContext } from "../../hooks/context"
import "./styles.css"
const sunImg = require("../../assets/sun.png")
const moonImg = require("../../assets/moon.png")

export function ThemeSwitcher(){
    const theme = useContext(ThemeContext)
    
    function handleClick(){
        theme.dispatch({type:"TOOGLE"})
    }
    return(
        <>
            <div className="switcher">
                <img src={sunImg} alt="light theme" className="theme-img"/>
                <img src={moonImg} alt="dark theme" className="theme-img" />
                <div onClick={handleClick} className="theme-button"></div>
            </div>
        </>
    )
}