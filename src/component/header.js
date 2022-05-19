
import React from "react";
import logo from "../images/logo.png"
export default function Header(){
    return(
        <div className="header">      
            <img className="logo-image" alt="" src={logo} />
            <h2 className="header-title-1">Meme Generator</h2>            
            <h4 className="header-title-2">React Course - Project 3</h4>
        </div>
    )
}