import React from 'react';
import Header from './component/header';
import Meme from './component/meme';
import './App.css';

export default function App() {
  // const [starWarsData, setStarWarsData] = React.useState({})
  // const [count , setCount] = React.useState(0)
  // console.log("Component rendered")
  // fetch("https://swapi.dev/api/people/1")
  // .then(res => res.json())
  // .then(data => setStarWarsData(data))

  // React.useEffect(()=>{
  //   fetch(`https://swapi.dev/api/people/${count}`)
  // .then(res => res.json())
  // .then(data => setStarWarsData(data))

  //   console.log("Effect shown or not check")
  // },[])

  // function incrCount(){
  //   setCount(prevCount=>
  //     prevCount+1
  //   )
  // }

  return (
    
    <div className="container">
    
    <Header/>
    <Meme />
    {/* <div>
            <h2>The count is {count}</h2>
            <button onClick={incrCount}>Get Next Character</button>
           
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            
        </div> */}
    </div>
  )

}

 
