import React, { useRef } from 'react'
import './Especie.css'
const Especie = ({details}) => {
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

        <div onClick={handleShow} className='especie-container' >
            <img className='especie-img' src={details.img} alt={`Imagen ${details.name}` } />
            <div className='especie-overlay' >
                <div className='especie-name' >{details.name}</div>
                <div className='especie-scname' ><i>{details.scientificName}</i></div>
            </div>
        </div>
        <div className={show?'modal-background':'modal-background not-visible'} >
            <div ref={wrapperRef} className={show?'especie-modal-container':'especie-modal-container not-visible'} >
            <span onClick={handleShow} class="material-symbols-outlined modal-close" >cancel</span>
                <img className='esp-modal-img' src={details.img} alt={`Imagen ${details.name}` }/>
                <div className='modal-content' >
                    <div className='modal-title' >
                        <div className='modal-name' >{details.name}</div>
                        <div className='modal-scname' ><i>({details.scientificName})</i></div>
                    </div>
                    <div className='modal-details' >
                        <p>
                            <strong>Longitud: </strong>{details.length} <strong>| Dieta: </strong>{details.diet}
                        </p>
                        <div className='modal-line-separator' ></div>
                        <p><strong>Hábitat y biología: </strong>{details.habit}</p>
                        <div className='modal-line-separator' ></div>
                        <p><strong>Relación con el hombre: </strong>{details.manRelation}</p>
                        <div className='modal-line-separator' ></div>
                        <p><strong>Distribución: </strong>{details.distribution}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Especie