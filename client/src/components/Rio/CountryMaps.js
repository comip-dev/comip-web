import React from 'react'
import './CountryMaps.css'
const CountryMaps = ({list}) =>{
    const [state,setState]=React.useState(list[0])
    
    return(
        <>
            <div className='map-container' >
                <div className='map-options-container' >
                    {
                    list.map(item=>{
                            return <>
                                <div onClick={()=>setState(item)} className={state.headline===item.headline? 'option-container-active':"option-container"} >
                                <p dangerouslySetInnerHTML={{__html:item.headline}}/>
                                </div>
                            </>
                        })
                    }
                </div>
                <img className='map-image' src={state.img} alt='mapa' />
            </div>
        </>
    )
}
export default CountryMaps