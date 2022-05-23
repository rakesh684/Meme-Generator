import React,{useState} from "react";
import memesData from "../memesData.js";
export default function Meme(){
    const [memeImage,setMemeImage]=useState("")

    function getMemeImage(e){
        e.preventDefault()
        const memesArray=memesData.data.memes
        const rendomNumber=Math.floor(Math.random() * memesArray.length)
        const url=memesArray[rendomNumber].url
        setMemeImage(url)
        console.log(memeImage)
       
    }
    

    return(

        
        <main>
            <form className="form">
                <input type="text" placeholder="Top-text" className="form-input" />
                <input type="text" placeholder="Button-text" className="form-input" />
                <button className="form-button"
                 onClick={getMemeImage}
                >
                Get a new meme images 
                <span>🖼</span>
                </button>

            </form>
            
            <img className="output-image" src={memeImage} alt=""/>
        </main>
    )
}