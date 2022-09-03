import React, { useRef } from "react";
import './Home.css'
import slide1 from '../assets/IMG1.jpg'
import slide2 from '../assets/IMG2.jpg'
import slide3 from '../assets/IMG3.jpg'

const Home = () =>{
    var slideIndex = 0;
    const started = useRef(false)

    React.useEffect(()=>{
        let x = document.getElementsByClassName("mySlides");
        console.log("====started",  started)
        if(x.length>0 && started.current=== false) {
            started.current = true
            carousel()
            
        }
    },[])
    // carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    console.log(x)
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 10000); // Change image every 2 seconds
    }

    return(
        <div className="home-container" >
            {/* <img className="mySlides" src={slide1} alt={"home slides"}/> */}
            <img className="mySlides" src={slide3} alt={"home slides"}/>
            <img className="mySlides" src={slide2} alt={"home slides"}/>
            <span class="material-symbols-outlined mouse-icon" >
                mouse
                </span>
        </div>
    )
}

export default Home