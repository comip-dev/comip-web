import React, { useRef } from "react";
import './Home.css'
import Footer from "../components/Footer/Footer";
import Homepost from '../components/Home/Homepost.jsx'
import {homeposts} from '../assets/data/homeposts.js'
import News from "../components/Home/News/News";
import HomeIcons from "../components/Home/HomeIcons/HomeIcons";
import { homeslides } from "../assets/data/homeslides";
import ScrollToTop from "../components/ScrollToTop";
import NavObserver from "../components/NavObserver";
import useWindowSize from "../hooks/useWindowSize";
const mouseIcon = "/images/icons/Scroll.gif"

const Home = () =>{
    const windowSize = useWindowSize()
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
    setTimeout(carousel, 10000); 
    }

    return(
        <>
        <div id="home-container" >
            <NavObserver/>
            {
                homeslides.map(item=> <img src={item.uri} className="mySlides" alt="home slide"  />
                )
            }
            <img src={mouseIcon} alt="mouse icon" className={windowSize.innerWidth>720 ?"mouse-icon":'res-mouse-icon'}/>
            <HomeIcons/>
            <div className={windowSize.innerWidth>720 ? "post-list":"pl-column"} >
                {
                    
                    homeposts?.map(post=>{                        
                        return(
                        <Homepost
                            title={post.title} 
                            img={post.img}
                            imgSide={post.imgSide}
                            text={post.text}
                            navigar={post.navigate}
                            to={post.to}
                            href={post.href}
                            />
                        )
                    })
                }
            </div>
            <News/>
            <Footer/>
        </div>
            <ScrollToTop div="home-container" id={true} />
                </>
    )
}

export default Home