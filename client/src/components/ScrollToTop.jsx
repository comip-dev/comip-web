import React,{useState, useEffect} from "react";
import upButton from '../assets/images/iconoupload.png'
import './ScrollToTop.css'

const ScrollToTop = () =>{

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        document.getElementsById("home-container").scroll(0,0)
        // window.scrollTo({
        //     top: 100,
        //     left: 100,
        //     behavior: 'smooth'
        //   });
    };
    // const goToTop =()=>{
    //     console.log("scrolling")
    //     window.scrollTo(0,0)
    // }   
    
    return(
        
                <button
                    className="up-button"
                    onClick={goToTop}
                >ARRIBA</button>

            
        
        // <button className="up-button" onClick={goToTop}>arriba</button>
    )
}

export default ScrollToTop
