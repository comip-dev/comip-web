import React, { useRef } from "react";
import Slider from '../Slider'
const TrafficStat = ({slides}) =>{
    const [show, setShow] = React.useState(false)
        const handleShow = () => {
            setShow(!show)
        }
        function useOutsideAlerter(ref) {
        React.useEffect(() => {
            function handleClickOutside(event) {
                console.log(ref.current)
            if ( ref.current &&!ref.current.classList.contains("not-visible") && !ref.current.contains(event.target)) {
                
                setShow(false)
            }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
        }
        const wrapperRef = useRef(null);
        useOutsideAlerter(wrapperRef)
    return(
        <>
            <div onClick={handleShow} className='trafficstat-container' >
            <img className='trafficstat-img' src={slides[0]} alt="estadistica trafico comercial" />
            <div className='trafficstat-overlay' >
            <span class="material-symbols-outlined">
                search
            </span>
            </div>
        </div>
        <div className={show?'modal-background':'modal-background not-visible'} >
            <div ref={wrapperRef} className={show?'trafficstat-modal-container':'trafficstat-modal-container not-visible'} >
            <span onClick={handleShow} class="material-symbols-outlined modal-close" >cancel</span>
                
                <div className='modal-content' >
                    <Slider slides={slides}/>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default TrafficStat