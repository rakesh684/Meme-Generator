import React from "react";
// import memesData from "../memesData.js";
export default function Meme(){

    const [meme , setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

   

    function handleInput(event){
        event.preventDefault()
        const {name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }
   
    const [allMemeImages,setAllMemeImage]=React.useState([])
    
    React.useEffect(()=>{
        async function getMemes(){
            const res= await fetch("https://api.imgflip.com/get_memes")
            const data= await res.json()
            setAllMemeImage(data.data.memes)
        }
        getMemes()
        // fetch("https://api.imgflip.com/get_memes")
        // .then(res => res.json())
        // .then(data => setAllMemeImage(data.data.memes ))
    },[])
    function getMemeImage(event){
        event.preventDefault()
        // const memesArray=allMemeImages.data.memes
        const randomNumber=Math.floor(Math.random() * allMemeImages.length)
        const url=allMemeImages[randomNumber].url
        setMeme(prevMeme =>({
           ...prevMeme,
            randomImage:url
        }))
      
       
    }
    
    return(

        
        <main>
            <div className="form">
                <input 
                   type="text" 
                   placeholder="Top-text" 
                   className="form-input" 
                   name="topText"
                   onChange={handleInput}
                   value={meme.topText}

                   />
                <input 
                     type="text"
                     placeholder="Button-text"
                     className="form-input" 
                     name="bottomText"
                     onChange={handleInput}
                     value={meme.bottomText}
                     />
                <button className="form-button"
                 onClick={getMemeImage}
                >
                Get a new meme images 
                <span>🖼</span>
                </button>

            </div>
            
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}