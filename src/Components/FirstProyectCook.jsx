const FortuneCookie = ({data}) => {
    return(
        <article className="firstContainer">

            <div className="title"> 
            <h1>GALLETAS DE LA FORTUNA</h1>
            </div>

            <div className="imgFraseContainer">
            <img src="/fondo/fondoText1.png" alt="" className="paperRoll"/>
               <p className="textHere">{data.phrase}

               <p className="author">{data.author}</p>
               </p>
              
            </div>
            
         
        </article>
    )
}

export default FortuneCookie

