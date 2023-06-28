import './App.css'
import FortuneCookie from './Components/FirstProyectCook'
import phrases from './data/phrases.json'
import { useState } from 'react'


function App() {


    const [ index, setPhrase ] = useState(0)

    
  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]


  const fondos = ['/background/fondo1.jpg', '/background/fondo2.png', '/background/fondo3.jpg', '/background/fondo4.png', '/background/fondo5.jpg', '/background/fondo6.png', '/background/fondo7.jpg', '/background/fondo8.png',]


    const changePhrase = () => {
      // setPhrase(index + 1)

      if (index < phrases.length){
        setPhrase(Math.floor(Math.random()*8))
      }else{
        setPhrase(0)
      }
    }

  
    document.body.style = `background: url(${fondos[index]}) no-repeat center center fixed;
    background-size: cover;
    text-align: center;
     color: ${colors[index]}`
  

    // ${fondos[0]}

    
  return (
    <>
      
      <FortuneCookie
      data={phrases[index]}/>

              <div className="buttonContainer">
               <button className='shuffleButton' onClick={changePhrase}>Ver más</button>
               </div>

    </>
  )
}

export default App
