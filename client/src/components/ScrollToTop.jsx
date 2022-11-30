import React,{useState, useEffect} from "react";
import upButton from '../assets/images/Icon-up.svg'
import './ScrollToTop.css'

const ScrollToTop = ({div}) =>{
    const [showButton, setShowButton] = useState(false)
    const onScroll = (e) => {
        let offsetY = document.getElementById(div).scrollTop
        offsetY>400 ?setShowButton(true): setShowButton(false)
    }
    useEffect(() => {
        document.getElementById(div).addEventListener('scroll',onScroll) 
      },[]);
    

    const goToTop = () => {
        document.getElementById(div).scroll(0,0)

    };

    
    return(
            <div className={showButton? "up-button":"up-button display-none" } >
                <img
                    src={upButton}
                    alt="up button"
                    className="up-button-img"
                    onClick={goToTop}
                />

            </div>

            
        
        // <button className="up-button" onClick={goToTop}>arriba</button>
    )
}

export default ScrollToTop
