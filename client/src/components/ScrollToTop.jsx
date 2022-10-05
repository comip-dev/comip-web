import React,{useState, useEffect} from "react";
import upButton from '../assets/images/Icon-up.svg'
import './ScrollToTop.css'

const ScrollToTop = () =>{

    
    const [scrollTop, setScrollTop] = useState(0);
    const [showButton, setShowButton] = useState(false)
    const onScroll = (e) => {
        let offsetY = document.getElementById("home-container").scrollTop
        offsetY>599 ?setShowButton(true): setShowButton(false)
    }
    useEffect(() => {
        document.getElementById("home-container").addEventListener('scroll', onScroll);
      },[]);
    
      useEffect(() => {
        console.log(scrollTop)
      }, [scrollTop])
    const goToTop = () => {
        document.getElementById("home-container").scroll(0,0)

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
