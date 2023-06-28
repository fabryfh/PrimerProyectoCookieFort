const FortuneCookie = ({data}) => {
    return(
        <article className="firstContainer">

            
            <h1 className="title">GALLETAS DE LA FORTUNA</h1>
        

            <div className="imgFraseContainer">

               <p className="textHere">
                {data.phrase}
                
               </p>
              
            </div>
            

        </article>
    )
}

export default FortuneCookie

{/* <img src="/fondo/fondoText1.png" alt="" className="paperRoll"/> */}