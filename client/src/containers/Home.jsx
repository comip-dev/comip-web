import React, { useRef } from "react";
import './Home.css'
import Footer from "../components/Footer/Footer";
import Homepost from '../components/Home/Homepost.jsx'
import {homeposts} from '../assets/data/homeposts.js'
import News from "../components/Home/News/News";
import HomeIcons from "../components/Home/HomeIcons/HomeIcons";
import { homeslides } from "../assets/data/homeslides";
import ScrollToTop from "../components/ScrollToTop";
const mouseIcon = "/images/icons/Scroll.gif"
// import mouseIcon from "../assets/images/mouse-home-icon.svg"
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
        <div id="home-container" >
            {
                homeslides.map(item=> <img src={item.uri} className="mySlides" alt="home slide"  />
                )
            }
            <img src={mouseIcon} alt="mouse icon" className="mouse-icon"/>
            <HomeIcons/>
            <div className="post-list" >
                {
                    
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
                }
            </div>
            <News/>
            <Footer/>
        </div>
            <ScrollToTop/>
                </>
    )
}

export default Home