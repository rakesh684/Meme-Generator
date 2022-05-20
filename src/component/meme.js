import React from "react";
export default function Meme(){
    return(
        
        <main>
            <form className="form">
                <input type="text" placeholder="Top-text" className="form-input" />
                <input type="text" placeholder="Button-text" className="form-input" />
                <button className="form-button">Get a new meme images <span>🖼</span></button>
            </form>
        </main>
    )
}