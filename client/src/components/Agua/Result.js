import React, { useRef } from 'react'
import './Result.css'
const Result = ({details}) => {
    const [show, setShow] = React.useState(false)
        const handleShow = () => {
            setShow(!show)
        }
        function useOutsideAlerter(ref) {
        React.useEffect(() => {
            function handleClickOutside(event) {
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

        <div onClick={handleShow} className='result-container' >
            <img className='especie-img' src={details} alt='resultado' />
            <div className='especie-overlay' >
            <span class="material-symbols-outlined">search</span>
            </div>
        </div>
        <div className={show?'modal-background':'modal-background not-visible'} >
            <div ref={wrapperRef} className={show?'result-modal-container':'result-modal-container not-visible'} >
            <span onClick={handleShow} class="material-symbols-outlined modal-close" >cancel</span>
                <img className='result-modal-img' src={details} alt={`Imagen ${details.name}` }/>
            </div>
        </div>
        </>
    )
}

export default Result