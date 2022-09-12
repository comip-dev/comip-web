import React, { useRef } from "react";
import './Home.css'
import slide2sm from '../assets/images/small/IMG2-small.jpg'
import slide2 from '../assets/images/large/IMG2.jpg'
import slide3sm from '../assets/images/small/IMG3-small.jpg'
import slide3 from '../assets/images/large/IMG3.jpg'
import Footer from "../components/Footer/Footer";
import ProgressiveImg from "../components/ProgressiveImg";

// import Homepost from '../components/Home/Homepost.jsx'
// import {homeposts} from '../assets/data/homeposts.js'
const Home = () =>{
    var slideIndex = 0;
    const started = useRef(false)

    React.useEffect(()=>{
        let x = document.getElementsByClassName("mySlides");
        if(x.length>0 && started.current=== false) {
            started.current = true
            carousel()
            
        }
    },[])

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 10000); // Change image every 2 seconds
    }

    return(
        <>
        <div className="home-container" >
            <ProgressiveImg 
                src={slide3}
                placeholderSrc={slide3sm}
                width="700"
                height="465"
                className="mySlides"
             />
            <ProgressiveImg 
                src={slide2}
                placeholderSrc={slide2sm}
                width="700"
                height="465"
                className="mySlides"
             />
            {/* <img className="mySlides" src={slide3} alt={"home slides"}/>
            <img className="mySlides" src={slide2} alt={"home slides"}/> */}
            <span class="material-symbols-outlined mouse-icon" >
                mouse
                </span>
        <div className="post-list" >
            {/* {
                
                homeposts?.map(post=>{
                    return(

                    <Homepost
                        title={post.title} 
                        img={post.img}
                        imgSide={post.imgSide}
                        text={post.text}
                        />
                    )
                })
            } */}
        </div>
        <Footer/>
        </div>
                </>
    )
}

export default Home