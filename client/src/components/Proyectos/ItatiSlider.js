import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './ItatiSlider.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const ItatiSlider = ({slides}) =>{
    return <Swiper
            spaceBetween={1}
            centeredSlides={true}
            autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
                >
                {
                    slides.map((s,i)=>{
                        return <SwiperSlide>
                        <div className='slide-image-container' >
                            <img className='itati-img-slide' src={s} alt='slide' />

                        </div>
                            </SwiperSlide>
                    })
                }
                
            </Swiper>
}

export default ItatiSlider