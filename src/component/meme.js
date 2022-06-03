import React,{useState} from "react";
import memesData from "../memesData.js";
export default function Meme(){

    const [meme , setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    // const [memeImage,setMemeImage]=useState("")
    const [allMemeImages,setAllMemeImage]=React.useState(memesData)

    function getMemeImage(e){
        e.preventDefault()
        const memesArray=allMemeImages.data.memes
        const randomNumber=Math.floor(Math.random() * memesArray.length)
        const url=memesArray[randomNumber].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage:url
        }))
      
       
    }
    
    return(

        
        <main>
            <div className="form">
                <input type="text" placeholder="Top-text" className="form-input" />
                <input type="text" placeholder="Button-text" className="form-input" />
                <button className="form-button"
                 onClick={getMemeImage}
                >
                Get a new meme images 
                <span>🖼</span>
                </button>

            </div>
            
            <img className="output-image" src={meme.randomImage} alt=""/>
        </main>
    )
}